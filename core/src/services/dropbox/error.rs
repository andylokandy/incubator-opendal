// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

use http::Response;
use http::StatusCode;
use http::Uri;
use serde::Deserialize;

use crate::raw::*;
use crate::Error;
use crate::ErrorKind;
use crate::Result;

#[derive(Default, Debug, Deserialize)]
#[serde(default)]
pub struct DropboxErrorResponse {
    pub error_summary: String,
}

/// Parse error response into Error.
pub async fn parse_error(resp: Response<IncomingAsyncBody>) -> Result<Error> {
    let (parts, body) = resp.into_parts();
    let bs = body.bytes().await?;

    let (mut kind, mut retryable) = match parts.status {
        StatusCode::NOT_FOUND => (ErrorKind::NotFound, false),
        StatusCode::FORBIDDEN => (ErrorKind::PermissionDenied, false),
        StatusCode::INTERNAL_SERVER_ERROR
        | StatusCode::BAD_GATEWAY
        | StatusCode::SERVICE_UNAVAILABLE
        | StatusCode::GATEWAY_TIMEOUT => (ErrorKind::Unexpected, true),
        _ => (ErrorKind::Unexpected, false),
    };

    let (message, dropbox_err) = serde_json::from_slice::<DropboxErrorResponse>(&bs)
        .map(|dropbox_err| (format!("{dropbox_err:?}"), Some(dropbox_err)))
        .unwrap_or_else(|_| (String::from_utf8_lossy(&bs).into_owned(), None));

    if let Some(dropbox_err) = dropbox_err {
        (kind, retryable) =
            parse_dropbox_error_summary(&dropbox_err.error_summary).unwrap_or((kind, retryable));
    }

    let mut err = Error::new(kind, &message).with_context("response", format!("{parts:?}"));

    if retryable {
        err = err.set_temporary();
    }

    if let Some(uri) = parts.extensions.get::<Uri>() {
        err = err.with_context("uri", uri.to_string());
    }

    Ok(err)
}

/// We cannot get the error type from the response header when the status code is 409.
/// Because Dropbox API v2 will put error summary in the response body,
/// we need to parse it to get the correct error type and then error kind.
///
/// See <https://www.dropbox.com/developers/documentation/http/documentation#error-handling>
pub fn parse_dropbox_error_summary(summary: &str) -> Option<(ErrorKind, bool)> {
    if summary.starts_with("path/not_found") || summary.starts_with("path_lookup/not_found") {
        Some((ErrorKind::NotFound, false))
    } else if summary.starts_with("path/conflict") {
        Some((ErrorKind::AlreadyExists, false))
    } else if summary.starts_with("too_many_write_operations") {
        Some((ErrorKind::RateLimited, true))
    } else {
        None
    }
}
