window.BENCHMARK_DATA = {
  "lastUpdate": 1675054860012,
  "repoUrl": "https://github.com/datafuselabs/opendal",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c43d3a0c2228e4a5bc4ff000c0487bf459148584",
          "message": "ci: Setup benchmark workflow (#1200)\n\n* ci: Setup benchmark workflow\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Enable memory and fs test\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-19T14:50:13+08:00",
          "tree_id": "32314d28759506524459b078c685b21648a89846",
          "url": "https://github.com/datafuselabs/opendal/commit/c43d3a0c2228e4a5bc4ff000c0487bf459148584"
        },
        "date": 1674112502195,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 320822,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 304194,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 68125,
            "range": "± 2980",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 731725,
            "range": "± 9629",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11123035,
            "range": "± 147417",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47299795,
            "range": "± 734398",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88260,
            "range": "± 1929",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1091914,
            "range": "± 35049",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16992079,
            "range": "± 298204",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72721296,
            "range": "± 1164611",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 89247,
            "range": "± 1961",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 86993,
            "range": "± 8485",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 146388,
            "range": "± 12635",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 224686,
            "range": "± 13141",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 471694,
            "range": "± 12847",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 456113,
            "range": "± 9099",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 280596,
            "range": "± 17895",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 538307,
            "range": "± 7681",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1099465,
            "range": "± 213053",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2194845,
            "range": "± 172667",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6701476,
            "range": "± 160703",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 5740115,
            "range": "± 703980",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 9058700,
            "range": "± 722216",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29210369,
            "range": "± 642102",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 59066910,
            "range": "± 2771345",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 30230628,
            "range": "± 442787",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 28842011,
            "range": "± 1259400",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 55810063,
            "range": "± 3354188",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 110193616,
            "range": "± 8038715",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 190997490,
            "range": "± 33681440",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1067,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13343,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 440349,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1802707,
            "range": "± 24279",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1388,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 44273,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1453425,
            "range": "± 2771",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13247780,
            "range": "± 173632",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1739,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3418,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6962,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13599,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27379,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 84228,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 168543,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 337037,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 684842,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1368840,
            "range": "± 1394",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2288030,
            "range": "± 37582",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4523913,
            "range": "± 67116",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9134686,
            "range": "± 161210",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 18196319,
            "range": "± 375250",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 36492914,
            "range": "± 678852",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28585100,
            "range": "± 452369",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 56093851,
            "range": "± 808006",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 113129324,
            "range": "± 1295261",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 226378255,
            "range": "± 1747404",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 452277589,
            "range": "± 2960340",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 228697,
            "range": "± 45291",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1378228,
            "range": "± 52206",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19507058,
            "range": "± 2272136",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 77520458,
            "range": "± 7711775",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 982,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 56454,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1682834,
            "range": "± 5034",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15165469,
            "range": "± 316550",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 124,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5cbca9cafcfba2f54ee9f11504e07c66dda11386",
          "message": "refactor: Remove observe read/write (#1202)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-19T16:34:54+08:00",
          "tree_id": "2c63897f0d0f0a39e239271b40404415a70633d7",
          "url": "https://github.com/datafuselabs/opendal/commit/5cbca9cafcfba2f54ee9f11504e07c66dda11386"
        },
        "date": 1674118452711,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 326460,
            "range": "± 765",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 307376,
            "range": "± 1506",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 63047,
            "range": "± 7766",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 685129,
            "range": "± 8905",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 10824724,
            "range": "± 159489",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 45990623,
            "range": "± 751999",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 84236,
            "range": "± 1567",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1065346,
            "range": "± 31869",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16793374,
            "range": "± 238751",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 69473506,
            "range": "± 1249802",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 84952,
            "range": "± 1445",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 68046,
            "range": "± 3264",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 151407,
            "range": "± 4888",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 269866,
            "range": "± 10642",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 560053,
            "range": "± 24987",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 443903,
            "range": "± 13853",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 376645,
            "range": "± 27678",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 682502,
            "range": "± 11587",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1414783,
            "range": "± 66397",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2766749,
            "range": "± 57452",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6980728,
            "range": "± 148579",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6894915,
            "range": "± 256466",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 13725280,
            "range": "± 778442",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 26631357,
            "range": "± 374933",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 61784165,
            "range": "± 1596889",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 30457404,
            "range": "± 414590",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 41998973,
            "range": "± 2806655",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 73384384,
            "range": "± 2698066",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 113687020,
            "range": "± 3376763",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 227520144,
            "range": "± 9358165",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1041,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12912,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 496395,
            "range": "± 2522",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4526240,
            "range": "± 67530",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1394,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 59189,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1804927,
            "range": "± 46460",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14156771,
            "range": "± 137238",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1945,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3865,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6800,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 15573,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 26814,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 105266,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 210308,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 420501,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 853415,
            "range": "± 745",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1705714,
            "range": "± 3141",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3141606,
            "range": "± 94374",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6027974,
            "range": "± 248452",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 11903855,
            "range": "± 504020",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 25737087,
            "range": "± 1191908",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 52000730,
            "range": "± 2118458",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 21120966,
            "range": "± 49482",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 42204268,
            "range": "± 91982",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 84245649,
            "range": "± 301418",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 168758818,
            "range": "± 1016121",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 337586521,
            "range": "± 924067",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 223351,
            "range": "± 51787",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1498225,
            "range": "± 68890",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19687698,
            "range": "± 444314",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 82034234,
            "range": "± 1462795",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1071,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 41597,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2278695,
            "range": "± 90059",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 16317896,
            "range": "± 119772",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 133,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de52ffe4a6d513f1bc3e518ab9fd2f3f8e8de091",
          "message": "feat: Let's try play with python (#1205)\n\n* feat: Let's try play with python\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Fix build on windows\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Don't commit cargo.lock\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Fix typo\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Make CI happy\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-19T17:27:19+08:00",
          "tree_id": "43362b8f6f585fd5fc73beac7905069a65f2d020",
          "url": "https://github.com/datafuselabs/opendal/commit/de52ffe4a6d513f1bc3e518ab9fd2f3f8e8de091"
        },
        "date": 1674121579685,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 327471,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 311653,
            "range": "± 957",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 69786,
            "range": "± 10806",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 756861,
            "range": "± 21182",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11789465,
            "range": "± 203944",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 49431709,
            "range": "± 1413881",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 92024,
            "range": "± 1640",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1155746,
            "range": "± 31072",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17968678,
            "range": "± 335852",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 75546912,
            "range": "± 1088463",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 91148,
            "range": "± 2016",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 90933,
            "range": "± 9414",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 155073,
            "range": "± 20031",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 333578,
            "range": "± 39417",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 514643,
            "range": "± 36828",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 493205,
            "range": "± 17647",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 341942,
            "range": "± 30607",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 634970,
            "range": "± 33225",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1245915,
            "range": "± 64988",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2561715,
            "range": "± 215053",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7547966,
            "range": "± 161769",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6892352,
            "range": "± 553491",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 11346783,
            "range": "± 419556",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 32454586,
            "range": "± 1354664",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 63342904,
            "range": "± 3037967",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 32980789,
            "range": "± 441524",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 32674584,
            "range": "± 2440901",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 60695652,
            "range": "± 4679024",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 119190493,
            "range": "± 3018391",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 218698744,
            "range": "± 34943574",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1044,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12997,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 434144,
            "range": "± 1244",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2230945,
            "range": "± 144984",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1156,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 44975,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1441816,
            "range": "± 45538",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13888974,
            "range": "± 184982",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1526,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3063,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5927,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11414,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 22852,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 85777,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 171220,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 342366,
            "range": "± 1033",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 685377,
            "range": "± 1825",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1374906,
            "range": "± 4310",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2642423,
            "range": "± 98903",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5323707,
            "range": "± 258824",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 10269375,
            "range": "± 403418",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 21326986,
            "range": "± 906478",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 44029250,
            "range": "± 1641108",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 30475298,
            "range": "± 359840",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 62361323,
            "range": "± 718433",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 124672569,
            "range": "± 1182110",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 244722771,
            "range": "± 2598880",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 485637351,
            "range": "± 5033262",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 227715,
            "range": "± 51974",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1520828,
            "range": "± 48694",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19555600,
            "range": "± 1637109",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 77936317,
            "range": "± 6474484",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 967,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 45508,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1789921,
            "range": "± 43476",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 17252139,
            "range": "± 277196",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 124,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0769590b0ad0b1361cff0c7cdddb1a6f7132ebc6",
          "message": "feat: Let's try play with Node.js (#1206)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-19T18:41:27+08:00",
          "tree_id": "5d5187aa290d7407357bbada9c3e7c294f4043c7",
          "url": "https://github.com/datafuselabs/opendal/commit/0769590b0ad0b1361cff0c7cdddb1a6f7132ebc6"
        },
        "date": 1674126492917,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 319681,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 309830,
            "range": "± 1184",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 68264,
            "range": "± 8852",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 732846,
            "range": "± 10247",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11363237,
            "range": "± 254658",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47699391,
            "range": "± 773445",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88440,
            "range": "± 1659",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1097939,
            "range": "± 38069",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17113683,
            "range": "± 251947",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72052654,
            "range": "± 1441863",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88498,
            "range": "± 1538",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 92006,
            "range": "± 4023",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 148728,
            "range": "± 8683",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 274421,
            "range": "± 11056",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 578469,
            "range": "± 19647",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 460431,
            "range": "± 12076",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 353206,
            "range": "± 5533",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 665627,
            "range": "± 28148",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1358818,
            "range": "± 27532",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2852075,
            "range": "± 61174",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7208347,
            "range": "± 336550",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6529188,
            "range": "± 291385",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 13650638,
            "range": "± 591476",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 38432081,
            "range": "± 503945",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 53261082,
            "range": "± 8452928",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 31826669,
            "range": "± 765377",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 36253920,
            "range": "± 1602644",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 65536644,
            "range": "± 2223163",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 119196562,
            "range": "± 4530464",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 261440115,
            "range": "± 5406583",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1075,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12993,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 507012,
            "range": "± 4668",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4595954,
            "range": "± 57620",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1673,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 57652,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1600649,
            "range": "± 52051",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13556862,
            "range": "± 109127",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2033,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3556,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7760,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13592,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27075,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 105305,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 210417,
            "range": "± 1549",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 420525,
            "range": "± 858",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 841194,
            "range": "± 1886",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1681134,
            "range": "± 3088",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2953851,
            "range": "± 144638",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5868661,
            "range": "± 277960",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 12156851,
            "range": "± 597418",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 23593551,
            "range": "± 1206020",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 47430903,
            "range": "± 1715428",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 19686147,
            "range": "± 51752",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 38949223,
            "range": "± 94633",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 77951948,
            "range": "± 273229",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 155776309,
            "range": "± 241365",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 310202289,
            "range": "± 499164",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 236042,
            "range": "± 67121",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1549002,
            "range": "± 90006",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 20044161,
            "range": "± 322821",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 82661859,
            "range": "± 1279946",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1031,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 40285,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2144939,
            "range": "± 70326",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 14003698,
            "range": "± 69214",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 132,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 158,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7419787ecfae56cfd6bc78228fe6d22602bba94f",
          "message": "chore: Add license header for nodejs (#1207)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-19T19:06:49+08:00",
          "tree_id": "79c7df075568d91ca5cec13a3300b24502849465",
          "url": "https://github.com/datafuselabs/opendal/commit/7419787ecfae56cfd6bc78228fe6d22602bba94f"
        },
        "date": 1674128171333,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 351384,
            "range": "± 11290",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 314027,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 69582,
            "range": "± 7393",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 751923,
            "range": "± 13846",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11580456,
            "range": "± 181019",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 49140052,
            "range": "± 1032744",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 91097,
            "range": "± 1894",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1120770,
            "range": "± 65580",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17641711,
            "range": "± 268038",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73518796,
            "range": "± 2146077",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 90561,
            "range": "± 1452",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 90357,
            "range": "± 6868",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 127593,
            "range": "± 9203",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 302726,
            "range": "± 37023",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 565883,
            "range": "± 39892",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 481727,
            "range": "± 11922",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 298571,
            "range": "± 9611",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 574290,
            "range": "± 27705",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1157243,
            "range": "± 28944",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2410837,
            "range": "± 161340",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7260982,
            "range": "± 169851",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6260459,
            "range": "± 535107",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 10009046,
            "range": "± 348729",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 31285893,
            "range": "± 656741",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 62689787,
            "range": "± 3236181",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 31090418,
            "range": "± 444473",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 30446168,
            "range": "± 1536074",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 58330635,
            "range": "± 2785989",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 116319766,
            "range": "± 8733223",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 203814918,
            "range": "± 29873081",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1069,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13242,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 470035,
            "range": "± 1107",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2012453,
            "range": "± 84523",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1197,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 47387,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1590836,
            "range": "± 21556",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14328121,
            "range": "± 171916",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1594,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3159,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6203,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 12411,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 24819,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 89522,
            "range": "± 585",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 178861,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 340074,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 680600,
            "range": "± 28663",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1360933,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2262614,
            "range": "± 42409",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4439831,
            "range": "± 69001",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8823213,
            "range": "± 104763",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17584593,
            "range": "± 139922",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 35255145,
            "range": "± 257362",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29013992,
            "range": "± 330808",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 58019734,
            "range": "± 1063726",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 115646568,
            "range": "± 1116712",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 235591439,
            "range": "± 4712333",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 467090425,
            "range": "± 6328909",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 233007,
            "range": "± 41290",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1443390,
            "range": "± 62735",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19388623,
            "range": "± 2024129",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 76492904,
            "range": "± 9312990",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1076,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 44074,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1610144,
            "range": "± 3280",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 16454080,
            "range": "± 446844",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 126,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 155,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ffe0eb3868f2d17da32a84a8ce7ce23e884fa0b",
          "message": "fix: Retry for read and write should at ObjectReader level (#1211)\n\nfix: Retry for read and write should be ObjectReader level\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-19T22:27:16+08:00",
          "tree_id": "0d62e5e974a19a3ea2c181a5454590edc94ef150",
          "url": "https://github.com/datafuselabs/opendal/commit/1ffe0eb3868f2d17da32a84a8ce7ce23e884fa0b"
        },
        "date": 1674139683366,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 358654,
            "range": "± 4895",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 347698,
            "range": "± 1539",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 77917,
            "range": "± 11755",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 864432,
            "range": "± 36829",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 13255423,
            "range": "± 1155651",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 56363674,
            "range": "± 2658966",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 103399,
            "range": "± 3607",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1310370,
            "range": "± 116304",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 19948310,
            "range": "± 967813",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 85670228,
            "range": "± 3639005",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 105219,
            "range": "± 6470",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 101507,
            "range": "± 5976",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 164754,
            "range": "± 9193",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 305923,
            "range": "± 18669",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 605705,
            "range": "± 12570",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 521199,
            "range": "± 15281",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 390656,
            "range": "± 49115",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 736709,
            "range": "± 46545",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1479140,
            "range": "± 84221",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 3059142,
            "range": "± 453285",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 8143091,
            "range": "± 665894",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 7466787,
            "range": "± 483972",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 13433503,
            "range": "± 643735",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 37292716,
            "range": "± 986936",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 72231208,
            "range": "± 3207961",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 36516636,
            "range": "± 776336",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 41613139,
            "range": "± 2752201",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 78531390,
            "range": "± 3410294",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 153763635,
            "range": "± 4342604",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 307578116,
            "range": "± 15104240",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1276,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 15036,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 555066,
            "range": "± 2309",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4365118,
            "range": "± 41544",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1822,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 63469,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1598502,
            "range": "± 17876",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 22698075,
            "range": "± 86143",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2066,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4126,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 9240,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 15903,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 31928,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 116878,
            "range": "± 636",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 233561,
            "range": "± 735",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 467050,
            "range": "± 2165",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 935580,
            "range": "± 3454",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1865250,
            "range": "± 10977",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3019750,
            "range": "± 101783",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6043879,
            "range": "± 196745",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 12145137,
            "range": "± 412013",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 24133725,
            "range": "± 554027",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 48335517,
            "range": "± 1077346",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 39390281,
            "range": "± 187848",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 78927179,
            "range": "± 407919",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 162254650,
            "range": "± 1554173",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 315172437,
            "range": "± 966003",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 631147895,
            "range": "± 2038298",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 228245,
            "range": "± 42527",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2139174,
            "range": "± 173195",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 24597680,
            "range": "± 1952947",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 98411876,
            "range": "± 3704468",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1218,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 49273,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2022209,
            "range": "± 43669",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 25127711,
            "range": "± 245772",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 155,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 178,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea0cef4c09386ef14f99ae1b44f716f4844d5159",
          "message": "feat: Allow retry sending read request (#1212)\n\n* Revert \"fix: Retry for read and write should at ObjectReader level (#1211)\"\n\nThis reverts commit 1ffe0eb3868f2d17da32a84a8ce7ce23e884fa0b.\n\n* feat: Allow retry sending read request\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Remove not needed clone\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-19T23:01:51+08:00",
          "tree_id": "f21ff10a481c75e147fe3fe80703d0afd269dc8b",
          "url": "https://github.com/datafuselabs/opendal/commit/ea0cef4c09386ef14f99ae1b44f716f4844d5159"
        },
        "date": 1674141702064,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 331830,
            "range": "± 4978",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 306753,
            "range": "± 2085",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 67350,
            "range": "± 12102",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 735012,
            "range": "± 39182",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11672371,
            "range": "± 204273",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48884219,
            "range": "± 799219",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 91060,
            "range": "± 1904",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1113017,
            "range": "± 41203",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17344528,
            "range": "± 395613",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72320820,
            "range": "± 1144112",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88741,
            "range": "± 1355",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 89106,
            "range": "± 4087",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 140949,
            "range": "± 8529",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 286771,
            "range": "± 7105",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 595936,
            "range": "± 26699",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 454659,
            "range": "± 12519",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 349688,
            "range": "± 11065",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 678853,
            "range": "± 27278",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1715479,
            "range": "± 85209",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2838148,
            "range": "± 157737",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7759976,
            "range": "± 366940",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 7092604,
            "range": "± 651754",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 12540121,
            "range": "± 1068547",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 39061288,
            "range": "± 1331933",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 75537378,
            "range": "± 3703011",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 31955653,
            "range": "± 1266000",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 39150346,
            "range": "± 1833450",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 74155990,
            "range": "± 2556215",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 146331194,
            "range": "± 5989095",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 312413832,
            "range": "± 10267495",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1020,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12752,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 501514,
            "range": "± 2779",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4227914,
            "range": "± 90439",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1665,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 58002,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1627714,
            "range": "± 28391",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 20874805,
            "range": "± 131387",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1709,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3420,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7559,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13304,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 26579,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 105119,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 210665,
            "range": "± 3944",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 420752,
            "range": "± 1147",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 840385,
            "range": "± 2444",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1691887,
            "range": "± 6678",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2950245,
            "range": "± 450379",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5578268,
            "range": "± 239223",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 14157452,
            "range": "± 1083304",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 25914278,
            "range": "± 2061715",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 45540652,
            "range": "± 2315812",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 40520152,
            "range": "± 249411",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 80384237,
            "range": "± 380294",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 162901787,
            "range": "± 1598230",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 330921101,
            "range": "± 3208920",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 654947560,
            "range": "± 6289054",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 234456,
            "range": "± 34893",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1599393,
            "range": "± 126806",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19995179,
            "range": "± 593111",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 84172477,
            "range": "± 22737513",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1059,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 62982,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2360867,
            "range": "± 220940",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 23662281,
            "range": "± 264357",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 145,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 150,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "439b75d654f2871db933ff330ff50e356ed011c7",
          "message": "chore(deps): bump ibnesayeed/setup-ipfs from cacf727ab8eae418dc4a2534c2c2c19343021c7c to b9b9f7d73db5f77d462225bb37dbd51153351dd9 (#1217)\n\nchore(deps): bump ibnesayeed/setup-ipfs\r\n\r\nBumps [ibnesayeed/setup-ipfs](https://github.com/ibnesayeed/setup-ipfs) from cacf727ab8eae418dc4a2534c2c2c19343021c7c to b9b9f7d73db5f77d462225bb37dbd51153351dd9.\r\n- [Release notes](https://github.com/ibnesayeed/setup-ipfs/releases)\r\n- [Commits](https://github.com/ibnesayeed/setup-ipfs/compare/cacf727ab8eae418dc4a2534c2c2c19343021c7c...b9b9f7d73db5f77d462225bb37dbd51153351dd9)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: ibnesayeed/setup-ipfs\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-01-23T23:40:54+08:00",
          "tree_id": "c1d7c7b93799e212cdd9faf628c43eef4a0e548d",
          "url": "https://github.com/datafuselabs/opendal/commit/439b75d654f2871db933ff330ff50e356ed011c7"
        },
        "date": 1674489595188,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 323564,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 308156,
            "range": "± 3588",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 67731,
            "range": "± 3054",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 732402,
            "range": "± 12045",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11127296,
            "range": "± 178134",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47309583,
            "range": "± 804418",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 89457,
            "range": "± 3443",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1110079,
            "range": "± 37030",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17106654,
            "range": "± 453848",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 71543547,
            "range": "± 4518913",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 87345,
            "range": "± 2265",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 86982,
            "range": "± 7806",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 121327,
            "range": "± 16717",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 246965,
            "range": "± 4281",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 473564,
            "range": "± 26669",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 443691,
            "range": "± 5060",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 285360,
            "range": "± 41563",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 556158,
            "range": "± 36183",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1174050,
            "range": "± 27059",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2214944,
            "range": "± 37997",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6641182,
            "range": "± 111664",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6326013,
            "range": "± 577451",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 9502440,
            "range": "± 987249",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 30371923,
            "range": "± 1584285",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 60303246,
            "range": "± 4379020",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 29102299,
            "range": "± 629509",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 28321851,
            "range": "± 1590959",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 55089001,
            "range": "± 2446977",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 110019514,
            "range": "± 8814561",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 192016105,
            "range": "± 33169233",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1057,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 16212,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 432539,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1752084,
            "range": "± 15962",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1415,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 45574,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1481779,
            "range": "± 7302",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13582116,
            "range": "± 229758",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1708,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 2850,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5711,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11367,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 22515,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 84450,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 168837,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 337929,
            "range": "± 8690",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 675428,
            "range": "± 860",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1350476,
            "range": "± 949",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2280939,
            "range": "± 34789",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4491922,
            "range": "± 77097",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8959472,
            "range": "± 175140",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17982985,
            "range": "± 231949",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 36613845,
            "range": "± 893026",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28208809,
            "range": "± 395774",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 56509642,
            "range": "± 407706",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 112029295,
            "range": "± 1095801",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 225218898,
            "range": "± 3158745",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 457705628,
            "range": "± 7655022",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 176358,
            "range": "± 48009",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1464731,
            "range": "± 74583",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19380567,
            "range": "± 2123043",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 77515090,
            "range": "± 8166199",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1080,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 46254,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1736639,
            "range": "± 8147",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15814399,
            "range": "± 242073",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 125,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51583f053b4229113070a85988a22c1dfdeb2b15",
          "message": "refactor: Remove not used unwind safe feature (#1218)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-24T00:12:33+08:00",
          "tree_id": "29b3e50af627938af580798b3e8bb66476e855df",
          "url": "https://github.com/datafuselabs/opendal/commit/51583f053b4229113070a85988a22c1dfdeb2b15"
        },
        "date": 1674491445955,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 320150,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 304700,
            "range": "± 731",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 67528,
            "range": "± 2206",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 738305,
            "range": "± 12871",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11192214,
            "range": "± 204092",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47706261,
            "range": "± 1227714",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88476,
            "range": "± 1515",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1099724,
            "range": "± 26455",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16921064,
            "range": "± 269769",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 71990151,
            "range": "± 1335980",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88561,
            "range": "± 1601",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 88265,
            "range": "± 7928",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 120184,
            "range": "± 12110",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 230117,
            "range": "± 22052",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 451603,
            "range": "± 25564",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 450372,
            "range": "± 9723",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 280709,
            "range": "± 4544",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 523904,
            "range": "± 25273",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1082973,
            "range": "± 86003",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2247635,
            "range": "± 42839",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6617412,
            "range": "± 110148",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6206236,
            "range": "± 533041",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 9429452,
            "range": "± 621086",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29980106,
            "range": "± 693534",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 60233687,
            "range": "± 4311806",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 29088717,
            "range": "± 565492",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 28641284,
            "range": "± 1782337",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 55620144,
            "range": "± 3147935",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 110467020,
            "range": "± 2015357",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 183937903,
            "range": "± 32360276",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1067,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12984,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 428737,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1730511,
            "range": "± 14343",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1152,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 45506,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1493839,
            "range": "± 10542",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13752735,
            "range": "± 222118",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1732,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 2901,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5759,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11535,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 23166,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 83399,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 166724,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 333218,
            "range": "± 1343",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 666690,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1332911,
            "range": "± 1261",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2185105,
            "range": "± 29510",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4359974,
            "range": "± 33465",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8715524,
            "range": "± 148390",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17380281,
            "range": "± 100096",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 34816745,
            "range": "± 268111",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 27670930,
            "range": "± 322950",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 55542183,
            "range": "± 622586",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 112565723,
            "range": "± 1632674",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 222267770,
            "range": "± 3606268",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 442661731,
            "range": "± 3419318",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 182898,
            "range": "± 38716",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1218966,
            "range": "± 213285",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 20781997,
            "range": "± 3774110",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 78783222,
            "range": "± 16935868",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 970,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 42022,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1715514,
            "range": "± 134424",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 14694043,
            "range": "± 342178",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 125,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 151,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1c9b092efd4aae68b9015cc0aad49ce225be3f3",
          "message": "docs: Polish README (#1220)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-24T13:04:49+08:00",
          "tree_id": "c419eec52dd92b7f41cb2bbeb069ae3d1fb21663",
          "url": "https://github.com/datafuselabs/opendal/commit/f1c9b092efd4aae68b9015cc0aad49ce225be3f3"
        },
        "date": 1674538185201,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 324601,
            "range": "± 1697",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 306709,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 66821,
            "range": "± 3369",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 720745,
            "range": "± 33181",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 10808820,
            "range": "± 171273",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 45928129,
            "range": "± 1084265",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87250,
            "range": "± 4001",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1078162,
            "range": "± 55583",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16356027,
            "range": "± 252218",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 69606397,
            "range": "± 4535390",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 86393,
            "range": "± 1507",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 91295,
            "range": "± 4502",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 136857,
            "range": "± 2446",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 296463,
            "range": "± 13066",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 565087,
            "range": "± 19374",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 451831,
            "range": "± 7472",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 355516,
            "range": "± 31405",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 660974,
            "range": "± 10949",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1308513,
            "range": "± 39841",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2652700,
            "range": "± 43351",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6540496,
            "range": "± 286746",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6058772,
            "range": "± 212986",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 11468305,
            "range": "± 790379",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 36038328,
            "range": "± 952211",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 73676580,
            "range": "± 3005224",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 31102534,
            "range": "± 1005726",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 38480002,
            "range": "± 1879603",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 71744213,
            "range": "± 2757035",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 143844123,
            "range": "± 1711671",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 288718997,
            "range": "± 6415134",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1102,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12987,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 494835,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4099435,
            "range": "± 51332",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1354,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 57768,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1557920,
            "range": "± 18075",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 21161159,
            "range": "± 97890",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2005,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3485,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6892,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13756,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27348,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 103413,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 206646,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 413188,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 826838,
            "range": "± 1679",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1652349,
            "range": "± 1645",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2422415,
            "range": "± 68861",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4908577,
            "range": "± 106468",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9645298,
            "range": "± 253936",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 19396114,
            "range": "± 588084",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 38445851,
            "range": "± 817501",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 39622239,
            "range": "± 278851",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 79377831,
            "range": "± 615050",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 158694033,
            "range": "± 982996",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 315725377,
            "range": "± 1628309",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 630988792,
            "range": "± 2583904",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 218242,
            "range": "± 47780",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1641407,
            "range": "± 75693",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19137478,
            "range": "± 1902463",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 79569539,
            "range": "± 2161738",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1064,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 41177,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1687612,
            "range": "± 34126",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 23806231,
            "range": "± 374447",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 132,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 149,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1518001e81d86bd4d66bcde4a954b15e4716b0f2",
          "message": "ci: Make sure opendal is buildable on windows (#1221)\n\n* CI: Make sure opendal is buildable on windows\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Remove not support chars on windows\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Allow hdfs test to fail\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Fix hdfs\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-26T18:03:29+08:00",
          "tree_id": "8eadb06705c796498b7963f7c66c44474d3e0168",
          "url": "https://github.com/datafuselabs/opendal/commit/1518001e81d86bd4d66bcde4a954b15e4716b0f2"
        },
        "date": 1674728610704,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 368605,
            "range": "± 16391",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 342886,
            "range": "± 1428",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 83984,
            "range": "± 12142",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 830643,
            "range": "± 42643",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 12573696,
            "range": "± 571141",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 53317744,
            "range": "± 1819473",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 100677,
            "range": "± 4353",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1242622,
            "range": "± 120577",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 19183170,
            "range": "± 268342",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 80952687,
            "range": "± 1417854",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 100566,
            "range": "± 1776",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 101654,
            "range": "± 4327",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 162478,
            "range": "± 18549",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 318125,
            "range": "± 13866",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 703892,
            "range": "± 49002",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 518966,
            "range": "± 7574",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 389878,
            "range": "± 27810",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 737458,
            "range": "± 9379",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1477147,
            "range": "± 40320",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2965578,
            "range": "± 161723",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7660052,
            "range": "± 161901",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 7940810,
            "range": "± 683744",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 13270897,
            "range": "± 768227",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 43806419,
            "range": "± 2767719",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 85696735,
            "range": "± 4860782",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 35638422,
            "range": "± 2851147",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 35203593,
            "range": "± 3256978",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 77885737,
            "range": "± 4263326",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 161490175,
            "range": "± 6628406",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 323781861,
            "range": "± 7115024",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1258,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 15233,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 550539,
            "range": "± 1027",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4770390,
            "range": "± 99816",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1589,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 66271,
            "range": "± 2507",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1778485,
            "range": "± 112230",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13800078,
            "range": "± 560997",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2363,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4113,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 8020,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 16164,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 32066,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 117249,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 234481,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 468930,
            "range": "± 652",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 937321,
            "range": "± 1026",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1871981,
            "range": "± 80605",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2811783,
            "range": "± 93947",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5419942,
            "range": "± 189440",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 10903019,
            "range": "± 408610",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 22117029,
            "range": "± 923088",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 44417799,
            "range": "± 1563635",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 33620872,
            "range": "± 1077277",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 66749009,
            "range": "± 321597",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 135859850,
            "range": "± 605452",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 271579558,
            "range": "± 1031239",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 543214772,
            "range": "± 1599093",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 212574,
            "range": "± 43787",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1959896,
            "range": "± 142199",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 24513786,
            "range": "± 1324578",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 97114859,
            "range": "± 4391535",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1258,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 55936,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2230821,
            "range": "± 53216",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 14393719,
            "range": "± 185300",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 159,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 182,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15d434f7945ade8c1a52d92c55531ea795bdf747",
          "message": "chore: Remove not needed files (#1224)\n\nRemove not needed files\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-27T00:11:25+08:00",
          "tree_id": "71e67eaab3a43c8ad94c613c7ee35290bef994d1",
          "url": "https://github.com/datafuselabs/opendal/commit/15d434f7945ade8c1a52d92c55531ea795bdf747"
        },
        "date": 1674751529741,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 383645,
            "range": "± 14838",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 348111,
            "range": "± 1068",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 84075,
            "range": "± 14267",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 948787,
            "range": "± 74307",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 14389153,
            "range": "± 1810675",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 55600042,
            "range": "± 1667489",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 105108,
            "range": "± 2850",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1373836,
            "range": "± 161813",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 21282742,
            "range": "± 3172119",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 91681769,
            "range": "± 7735232",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 103322,
            "range": "± 5063",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 108012,
            "range": "± 6913",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 178904,
            "range": "± 10945",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 311718,
            "range": "± 10647",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 623514,
            "range": "± 15505",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 547650,
            "range": "± 14515",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 425452,
            "range": "± 28939",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 788041,
            "range": "± 23107",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1596030,
            "range": "± 80281",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 3594680,
            "range": "± 186356",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 9808887,
            "range": "± 1315714",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 10035266,
            "range": "± 548249",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 16304713,
            "range": "± 847546",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 44400472,
            "range": "± 2029693",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 65663720,
            "range": "± 2073436",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 39992739,
            "range": "± 4335848",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 47898852,
            "range": "± 3560210",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 84928500,
            "range": "± 7186989",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 173261346,
            "range": "± 5836102",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 344183659,
            "range": "± 8167785",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1248,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 17410,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 567175,
            "range": "± 3442",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4782682,
            "range": "± 79895",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1964,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 68967,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1994356,
            "range": "± 78268",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14601599,
            "range": "± 73722",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2344,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4229,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 8122,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 18240,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 31895,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 118193,
            "range": "± 2478",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 235546,
            "range": "± 510",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 470837,
            "range": "± 827",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 954746,
            "range": "± 7270",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1911487,
            "range": "± 24721",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3578758,
            "range": "± 175745",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 7462405,
            "range": "± 324647",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 15397078,
            "range": "± 968266",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 29177127,
            "range": "± 1049252",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 56365982,
            "range": "± 2061048",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29450316,
            "range": "± 77749",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 59008538,
            "range": "± 181646",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 117727861,
            "range": "± 325880",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 235468419,
            "range": "± 4030484",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 480103438,
            "range": "± 3186962",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 297697,
            "range": "± 47475",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2054869,
            "range": "± 212370",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 26077791,
            "range": "± 1886593",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 104638534,
            "range": "± 9505954",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1272,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 59308,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2755760,
            "range": "± 135912",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 21517605,
            "range": "± 2060354",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 163,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 182,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a791f278af84bd58f9e8f5c73401eebb2a5512e",
          "message": "ci: Remove not needed audit checks (#1226)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-27T01:03:52+08:00",
          "tree_id": "3f9d9bcbec257905f000348545ee88f7ae026cca",
          "url": "https://github.com/datafuselabs/opendal/commit/3a791f278af84bd58f9e8f5c73401eebb2a5512e"
        },
        "date": 1674754146719,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 325884,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 309882,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 67828,
            "range": "± 10466",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 735992,
            "range": "± 13294",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11506867,
            "range": "± 236393",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48815075,
            "range": "± 673650",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 90224,
            "range": "± 2290",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1115252,
            "range": "± 39570",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17420248,
            "range": "± 289599",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73142081,
            "range": "± 1740621",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 89729,
            "range": "± 1469",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 89458,
            "range": "± 8061",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 112577,
            "range": "± 12918",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 225444,
            "range": "± 8716",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 449332,
            "range": "± 10332",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 457197,
            "range": "± 10781",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 292948,
            "range": "± 7245",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 552104,
            "range": "± 19825",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1327100,
            "range": "± 125492",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2243318,
            "range": "± 152730",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6838574,
            "range": "± 236141",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6151937,
            "range": "± 541658",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 9259115,
            "range": "± 321450",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29716343,
            "range": "± 450958",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 60457336,
            "range": "± 5124485",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 30599844,
            "range": "± 913513",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 29852369,
            "range": "± 1757867",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 56650648,
            "range": "± 3150682",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 112634147,
            "range": "± 1647698",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 197239896,
            "range": "± 29109948",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1023,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13254,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 454926,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1900822,
            "range": "± 48382",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1360,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 45670,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1561136,
            "range": "± 41141",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14650480,
            "range": "± 193577",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1405,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 2774,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5520,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11130,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 21839,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 87895,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 175817,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 351125,
            "range": "± 307",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 702377,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1403989,
            "range": "± 787",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2567478,
            "range": "± 57578",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5001042,
            "range": "± 98040",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 10062775,
            "range": "± 436793",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 20164613,
            "range": "± 506868",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 39191248,
            "range": "± 979535",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28038607,
            "range": "± 343341",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 56413390,
            "range": "± 618390",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 113662760,
            "range": "± 5086143",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 231041706,
            "range": "± 4451626",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 457525273,
            "range": "± 4128180",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 201959,
            "range": "± 31130",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1433806,
            "range": "± 35799",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19343920,
            "range": "± 2277258",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 77603916,
            "range": "± 7699869",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 975,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 42482,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1503784,
            "range": "± 6279",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15322300,
            "range": "± 318195",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 125,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b5bf5f42874d3b3be113a4ef4aba79ad83f11d1",
          "message": "cleanup: Move oli and oay into binaries (#1227)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-27T12:24:05+08:00",
          "tree_id": "869ebcc96dd8fbeea365b788eb80e8bbb96e523e",
          "url": "https://github.com/datafuselabs/opendal/commit/1b5bf5f42874d3b3be113a4ef4aba79ad83f11d1"
        },
        "date": 1674794635601,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 353004,
            "range": "± 5489",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 304273,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 68586,
            "range": "± 9058",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 745251,
            "range": "± 13872",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11358789,
            "range": "± 161173",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48445314,
            "range": "± 858617",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 89689,
            "range": "± 4416",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1115167,
            "range": "± 36952",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17257019,
            "range": "± 267852",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 74067892,
            "range": "± 1739748",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 90233,
            "range": "± 1713",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 76974,
            "range": "± 11928",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 141388,
            "range": "± 20608",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 280701,
            "range": "± 20136",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 450946,
            "range": "± 9691",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 455330,
            "range": "± 8074",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 281254,
            "range": "± 5628",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 555200,
            "range": "± 5118",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1103630,
            "range": "± 20126",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2254734,
            "range": "± 110877",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6563861,
            "range": "± 118413",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6061749,
            "range": "± 571892",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 9013207,
            "range": "± 384196",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29126097,
            "range": "± 753849",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 60080241,
            "range": "± 5316903",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 29023395,
            "range": "± 597176",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 28892524,
            "range": "± 1407171",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 55578393,
            "range": "± 1571374",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 111544825,
            "range": "± 4371589",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 189496046,
            "range": "± 32673482",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1032,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12435,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 477501,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1974628,
            "range": "± 28776",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1170,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 49115,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1578259,
            "range": "± 6134",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14137440,
            "range": "± 160715",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1432,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 2862,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5575,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11222,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 22462,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 82693,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 165430,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 330399,
            "range": "± 1208",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 660635,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1422310,
            "range": "± 1152",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2278144,
            "range": "± 10115",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4289592,
            "range": "± 27398",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9114361,
            "range": "± 79279",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 18227907,
            "range": "± 77137",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 36539056,
            "range": "± 315739",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28285797,
            "range": "± 456254",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 56407016,
            "range": "± 727020",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 113359224,
            "range": "± 1398299",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 226274890,
            "range": "± 1888136",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 450054562,
            "range": "± 27239646",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 226789,
            "range": "± 71729",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1290629,
            "range": "± 51068",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19499575,
            "range": "± 2563104",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 75780056,
            "range": "± 10131051",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1035,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 45569,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1566602,
            "range": "± 2764",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 14375995,
            "range": "± 314192",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 132,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 150,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91d2668186c8efe365afebff2254637e4057b781",
          "message": "cleanup: Move testdata into tests/data (#1228)\n\n* cleanup: Move testdata into tests/data\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Fix ci\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-27T12:55:09+08:00",
          "tree_id": "4e8df2994490acc17bcddb8228aab416a145b1f1",
          "url": "https://github.com/datafuselabs/opendal/commit/91d2668186c8efe365afebff2254637e4057b781"
        },
        "date": 1674796691314,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 347870,
            "range": "± 5702",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 331189,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 69381,
            "range": "± 2790",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 745238,
            "range": "± 13232",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11446295,
            "range": "± 340029",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 49126770,
            "range": "± 1253615",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 89761,
            "range": "± 3659",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1125554,
            "range": "± 52455",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17479700,
            "range": "± 323200",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 74563625,
            "range": "± 1396160",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 90756,
            "range": "± 2213",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 91382,
            "range": "± 7889",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 123816,
            "range": "± 22627",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 244318,
            "range": "± 31180",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 442166,
            "range": "± 35632",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 466494,
            "range": "± 10681",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 284912,
            "range": "± 39306",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 555141,
            "range": "± 30537",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1099753,
            "range": "± 67008",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2261798,
            "range": "± 169809",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6691705,
            "range": "± 146927",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6283283,
            "range": "± 617614",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 9146456,
            "range": "± 808163",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29816579,
            "range": "± 1804585",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 59703560,
            "range": "± 4339988",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 30369302,
            "range": "± 3192076",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 29060107,
            "range": "± 1250209",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 56129980,
            "range": "± 1572544",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 112115560,
            "range": "± 5330036",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 199200914,
            "range": "± 30416407",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1018,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13352,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 427358,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1763138,
            "range": "± 27245",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1394,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 46363,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1472142,
            "range": "± 1647",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13649422,
            "range": "± 116655",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1807,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3605,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5870,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11676,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 23625,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 84050,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 168101,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 336978,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 672902,
            "range": "± 608",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1345243,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2150320,
            "range": "± 13451",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4299362,
            "range": "± 19732",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8585536,
            "range": "± 50557",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 18173931,
            "range": "± 176769",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 36321785,
            "range": "± 264981",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29644325,
            "range": "± 1490340",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 59023058,
            "range": "± 767208",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 118111027,
            "range": "± 1552973",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 225228157,
            "range": "± 2115304",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 468517822,
            "range": "± 4271252",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 229475,
            "range": "± 59581",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1348886,
            "range": "± 62235",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19510820,
            "range": "± 2627332",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 76590304,
            "range": "± 8193687",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 979,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 47813,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1765567,
            "range": "± 3979",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 16155356,
            "range": "± 336291",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 132,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e45ba0da9befc843a7c5fb1d58f45eba57be795",
          "message": "refactor(layers/metrics): Defer initiation of error counters (#1232)\n\n* Make metrics handler in arc\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* refactor(layers/metrics): Defer initiation of error counters\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-27T15:41:11+08:00",
          "tree_id": "f931b2723cca670831e092c1fbb0637f8c1e6857",
          "url": "https://github.com/datafuselabs/opendal/commit/6e45ba0da9befc843a7c5fb1d58f45eba57be795"
        },
        "date": 1674806527627,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 364246,
            "range": "± 3413",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 347364,
            "range": "± 960",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 80271,
            "range": "± 3681",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 853900,
            "range": "± 16943",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 13149062,
            "range": "± 598256",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 56834269,
            "range": "± 3146005",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 105186,
            "range": "± 2412",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1299405,
            "range": "± 57217",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 20826730,
            "range": "± 1265162",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 85939644,
            "range": "± 3759260",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 105311,
            "range": "± 3361",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 102949,
            "range": "± 6266",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 161186,
            "range": "± 6761",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 308009,
            "range": "± 6475",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 628818,
            "range": "± 24243",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 537898,
            "range": "± 14827",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 412812,
            "range": "± 33861",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 749317,
            "range": "± 34574",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1503658,
            "range": "± 43879",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 3223520,
            "range": "± 139948",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7771326,
            "range": "± 226238",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 7084948,
            "range": "± 373793",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 13413737,
            "range": "± 818723",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 41211713,
            "range": "± 1366275",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 83579257,
            "range": "± 3662504",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 36054860,
            "range": "± 1622788",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 44016235,
            "range": "± 1784070",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 82640436,
            "range": "± 3164232",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 164052407,
            "range": "± 3770541",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 325829179,
            "range": "± 4843547",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1198,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 15952,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 556088,
            "range": "± 3713",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4453928,
            "range": "± 49875",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1735,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 64549,
            "range": "± 786",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1647939,
            "range": "± 30904",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 23095899,
            "range": "± 191040",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2205,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3945,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 8833,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 15816,
            "range": "± 454",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 31323,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 118446,
            "range": "± 893",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 235434,
            "range": "± 2569",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 473519,
            "range": "± 4433",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 942652,
            "range": "± 7452",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1891458,
            "range": "± 21871",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2509007,
            "range": "± 116556",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5216053,
            "range": "± 177281",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 10254008,
            "range": "± 432519",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 20508849,
            "range": "± 891128",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 40598839,
            "range": "± 1666716",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 43372188,
            "range": "± 427069",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 87155844,
            "range": "± 781260",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 173235543,
            "range": "± 1295360",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 348013376,
            "range": "± 2317881",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 694724177,
            "range": "± 4650660",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 201946,
            "range": "± 43637",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1888580,
            "range": "± 211088",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 25273228,
            "range": "± 2358336",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 101442624,
            "range": "± 3151904",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1238,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 72473,
            "range": "± 695",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1804055,
            "range": "± 73382",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 25224115,
            "range": "± 437363",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 154,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 173,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "941c525e1ae520289db3e3bfaa7f81f9b64a2a75",
          "message": "Bump to version 0.25.1 (#1233)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-27T16:12:20+08:00",
          "tree_id": "6cdb36b3bdeb7328aa561dc5547e606822739abb",
          "url": "https://github.com/datafuselabs/opendal/commit/941c525e1ae520289db3e3bfaa7f81f9b64a2a75"
        },
        "date": 1674808244401,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 356262,
            "range": "± 571",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 339835,
            "range": "± 1354",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 69154,
            "range": "± 11122",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 754570,
            "range": "± 12636",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11752716,
            "range": "± 808143",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 49477216,
            "range": "± 2193698",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 92576,
            "range": "± 2102",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1137531,
            "range": "± 51749",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17709197,
            "range": "± 298050",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 74086063,
            "range": "± 1988013",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 90807,
            "range": "± 2407",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 89479,
            "range": "± 6365",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 120786,
            "range": "± 5174",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 263738,
            "range": "± 13172",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 586558,
            "range": "± 30707",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 484681,
            "range": "± 21325",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 291889,
            "range": "± 19945",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 585112,
            "range": "± 15334",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1186168,
            "range": "± 54401",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2420687,
            "range": "± 65828",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7314719,
            "range": "± 145239",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6652192,
            "range": "± 510098",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 10907767,
            "range": "± 441647",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 28285595,
            "range": "± 864131",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 53661192,
            "range": "± 1789195",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 31106288,
            "range": "± 495900",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 29662564,
            "range": "± 2275593",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 55242284,
            "range": "± 2789411",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 109188677,
            "range": "± 8528761",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 195593798,
            "range": "± 33953556",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1068,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 14037,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 479168,
            "range": "± 6886",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2089252,
            "range": "± 47548",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1260,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 50895,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1619565,
            "range": "± 13418",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14731822,
            "range": "± 92719",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1794,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 2970,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5942,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 12081,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 23584,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 92076,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 183880,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 336666,
            "range": "± 7530",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 673161,
            "range": "± 787",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1344832,
            "range": "± 1405",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2425306,
            "range": "± 85936",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4814248,
            "range": "± 118518",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9850905,
            "range": "± 280735",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 20650311,
            "range": "± 675623",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 40739291,
            "range": "± 1082043",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28415467,
            "range": "± 331966",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 54042187,
            "range": "± 456379",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 108406726,
            "range": "± 909743",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 218322315,
            "range": "± 2976917",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 457929306,
            "range": "± 3544199",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 184704,
            "range": "± 54812",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1379564,
            "range": "± 77556",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19295911,
            "range": "± 1913189",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 78542252,
            "range": "± 5426278",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 982,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 55520,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1602122,
            "range": "± 5654",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15986069,
            "range": "± 211468",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 124,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 153,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajivshah1@icloud.com",
            "name": "Rajiv Shah",
            "username": "rajivshah3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47f43bb2a2fddf13b8598164e95fc346c84b252f",
          "message": "fix(services/ghac): Fix log message for `ghac_upload` in `write` (#1239)\n\nSigned-off-by: Rajiv Shah <rajivshah1@icloud.com>",
          "timestamp": "2023-01-28T09:29:47+08:00",
          "tree_id": "ac5004a2f3f75514200b958863c3f51c7c406a30",
          "url": "https://github.com/datafuselabs/opendal/commit/47f43bb2a2fddf13b8598164e95fc346c84b252f"
        },
        "date": 1674870566037,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 320035,
            "range": "± 4833",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 310363,
            "range": "± 1514",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 67138,
            "range": "± 11939",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 723227,
            "range": "± 10934",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 10969732,
            "range": "± 219974",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 46251236,
            "range": "± 717647",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87009,
            "range": "± 1850",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1092247,
            "range": "± 45272",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17029732,
            "range": "± 246078",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72076871,
            "range": "± 1256745",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 89712,
            "range": "± 2040",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 84031,
            "range": "± 4144",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 138178,
            "range": "± 6598",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 291891,
            "range": "± 9295",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 578757,
            "range": "± 23798",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 455190,
            "range": "± 11506",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 348626,
            "range": "± 5281",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 686772,
            "range": "± 29700",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1344804,
            "range": "± 46706",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2704433,
            "range": "± 143320",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6547100,
            "range": "± 329984",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 5988120,
            "range": "± 417219",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 12796355,
            "range": "± 1168857",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 37575219,
            "range": "± 1323424",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 74374423,
            "range": "± 3663327",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 30837209,
            "range": "± 455293",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 41081485,
            "range": "± 2590041",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 71994305,
            "range": "± 1916983",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 146128706,
            "range": "± 2891839",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 285734869,
            "range": "± 7562868",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1073,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12503,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 496090,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4158301,
            "range": "± 50140",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1352,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 58833,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1597595,
            "range": "± 6271",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 21107920,
            "range": "± 116728",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2047,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3992,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6937,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13820,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27282,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 107461,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 214859,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 429352,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 858690,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1716856,
            "range": "± 1707",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2496110,
            "range": "± 61913",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4959233,
            "range": "± 166864",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9914143,
            "range": "± 280414",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 20008791,
            "range": "± 532417",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 39727174,
            "range": "± 1191124",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 38847329,
            "range": "± 175759",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 77513855,
            "range": "± 273775",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 151407303,
            "range": "± 471119",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 303341913,
            "range": "± 802964",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 606626099,
            "range": "± 1346474",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 150873,
            "range": "± 96866",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1352826,
            "range": "± 81148",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 20901245,
            "range": "± 3749959",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 76968345,
            "range": "± 14802100",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1185,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 44810,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1566539,
            "range": "± 13847",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 22368991,
            "range": "± 343270",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 133,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 149,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "psiace@ritelabs.net",
            "name": "Chojan Shang",
            "username": "PsiACE"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce9c53c312f6b8079997eaeab09aff0b0d46a24d",
          "message": "docs(http): remove out-dated comments (#1240)\n\ndocs: remove out-dated comments\r\n\r\nSigned-off-by: Chojan Shang <psiace@outlook.com>",
          "timestamp": "2023-01-28T12:20:40+08:00",
          "tree_id": "70dd66b4364ae4d83c099b1b520c1d0ad521f677",
          "url": "https://github.com/datafuselabs/opendal/commit/ce9c53c312f6b8079997eaeab09aff0b0d46a24d"
        },
        "date": 1674880803222,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 318162,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 306157,
            "range": "± 1151",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 66700,
            "range": "± 2419",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 726937,
            "range": "± 19523",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11043442,
            "range": "± 350863",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47286924,
            "range": "± 655803",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88176,
            "range": "± 5533",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1096507,
            "range": "± 40499",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16952749,
            "range": "± 380959",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72552657,
            "range": "± 1240992",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 89295,
            "range": "± 1338",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 82159,
            "range": "± 9148",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 136636,
            "range": "± 3574",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 272790,
            "range": "± 11237",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 551224,
            "range": "± 12081",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 461754,
            "range": "± 9660",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 354999,
            "range": "± 23535",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 663381,
            "range": "± 26660",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1329667,
            "range": "± 78863",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2892684,
            "range": "± 143645",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6545200,
            "range": "± 213764",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 5835078,
            "range": "± 408346",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 12766827,
            "range": "± 871920",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 33096046,
            "range": "± 1904539",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 64886732,
            "range": "± 1799872",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 32663345,
            "range": "± 534984",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 37937260,
            "range": "± 1956558",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 71691076,
            "range": "± 3953217",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 145596953,
            "range": "± 2845274",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 293763648,
            "range": "± 20196905",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1041,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13991,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 498500,
            "range": "± 3355",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4302468,
            "range": "± 167524",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1350,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 59463,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1760754,
            "range": "± 79093",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 22093055,
            "range": "± 200883",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1765,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3948,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6863,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13645,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 26760,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 104921,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 209598,
            "range": "± 395",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 418909,
            "range": "± 529",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 837815,
            "range": "± 2997",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1676703,
            "range": "± 3692",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2988039,
            "range": "± 107024",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 7024999,
            "range": "± 264711",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 13460921,
            "range": "± 538387",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 26683279,
            "range": "± 976738",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 54107972,
            "range": "± 1647481",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 40112474,
            "range": "± 202272",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 80308202,
            "range": "± 542616",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 160955056,
            "range": "± 1296557",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 320981392,
            "range": "± 2789979",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 635926494,
            "range": "± 2326088",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 164990,
            "range": "± 64276",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1234656,
            "range": "± 257255",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 20676674,
            "range": "± 3938695",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 81445853,
            "range": "± 13903533",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1072,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 62760,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1713028,
            "range": "± 71185",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 24617453,
            "range": "± 215367",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 133,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 149,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c87bf684a08bfa658fe0f09e61225a459d549efa",
          "message": "chore: Make sure oli/oay's cargo.lock is updated (#1241)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T12:53:23+08:00",
          "tree_id": "a08f09f065cba682a439f2a03f85e4765bb7045e",
          "url": "https://github.com/datafuselabs/opendal/commit/c87bf684a08bfa658fe0f09e61225a459d549efa"
        },
        "date": 1674882984091,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 350942,
            "range": "± 1616",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 333943,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 68402,
            "range": "± 7277",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 741138,
            "range": "± 15551",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11510866,
            "range": "± 507531",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48244764,
            "range": "± 775777",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 89500,
            "range": "± 6646",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1107987,
            "range": "± 27941",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17493590,
            "range": "± 382869",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72777842,
            "range": "± 2295864",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88933,
            "range": "± 15714",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 88271,
            "range": "± 8857",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 124571,
            "range": "± 10488",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 241527,
            "range": "± 10533",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 456187,
            "range": "± 18796",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 448366,
            "range": "± 17356",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 276202,
            "range": "± 4309",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 539461,
            "range": "± 35202",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1092110,
            "range": "± 40036",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2338776,
            "range": "± 132771",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6787027,
            "range": "± 249136",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 5407046,
            "range": "± 377635",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 9642018,
            "range": "± 638229",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 21569115,
            "range": "± 524588",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 50728231,
            "range": "± 674896",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 30120492,
            "range": "± 599204",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 29283580,
            "range": "± 1297383",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 58572832,
            "range": "± 2872955",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 112033007,
            "range": "± 2295751",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 189618611,
            "range": "± 30205703",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1053,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12879,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 431640,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1950198,
            "range": "± 52849",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1260,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 48198,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1631767,
            "range": "± 13054",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13825097,
            "range": "± 154106",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1574,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3062,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6170,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 12408,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 28703,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 90113,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 180313,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 360217,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 720686,
            "range": "± 743",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1440898,
            "range": "± 12025",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2146783,
            "range": "± 80224",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4249517,
            "range": "± 100104",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8444593,
            "range": "± 185080",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 16950503,
            "range": "± 381753",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 33432594,
            "range": "± 519747",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29162627,
            "range": "± 228179",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 58769761,
            "range": "± 615853",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 117496423,
            "range": "± 901995",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 233854927,
            "range": "± 1539467",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 465485738,
            "range": "± 4236333",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 235586,
            "range": "± 47596",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1229666,
            "range": "± 106547",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 20591934,
            "range": "± 3564841",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 80494573,
            "range": "± 15457350",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 993,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 41579,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2000442,
            "range": "± 3596",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15038044,
            "range": "± 279376",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 123,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 153,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3066afc6c38deed17f35cb11ed6fc2129aa60379",
          "message": "refacor(services/fs): Make normalized path check optional (#1242)\n\n* Remove not needed benches\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* refacor(services/fs): Make normalized path check optional\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T16:16:51+08:00",
          "tree_id": "7701116183edea43e79415896631873ce4dc3e5a",
          "url": "https://github.com/datafuselabs/opendal/commit/3066afc6c38deed17f35cb11ed6fc2129aa60379"
        },
        "date": 1674894895033,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 328094,
            "range": "± 5728",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 336921,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 88595,
            "range": "± 8726",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 769676,
            "range": "± 19079",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11687301,
            "range": "± 189358",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48113999,
            "range": "± 2658491",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87601,
            "range": "± 1575",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1097366,
            "range": "± 52776",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17280704,
            "range": "± 249919",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72492047,
            "range": "± 1406928",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 86851,
            "range": "± 1443",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 88133,
            "range": "± 5456",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 138061,
            "range": "± 11716",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 223869,
            "range": "± 18601",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 500845,
            "range": "± 21533",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 468838,
            "range": "± 9463",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 295595,
            "range": "± 10038",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 563517,
            "range": "± 35759",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1153733,
            "range": "± 57788",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2370500,
            "range": "± 52512",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7076767,
            "range": "± 105789",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6455813,
            "range": "± 533397",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 10255133,
            "range": "± 584023",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 31759408,
            "range": "± 1533685",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 63338582,
            "range": "± 5526320",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 31063393,
            "range": "± 481340",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 30251078,
            "range": "± 2773863",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 57428961,
            "range": "± 2965033",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 114798782,
            "range": "± 3536267",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 198277458,
            "range": "± 31782685",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1029,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12917,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 471627,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2025905,
            "range": "± 57822",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1464,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 48575,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1517579,
            "range": "± 16812",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13487719,
            "range": "± 1903445",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1736,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 2963,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5698,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13217,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 22905,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 90891,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 171556,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 343020,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 686042,
            "range": "± 3769",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1371405,
            "range": "± 25123",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2389881,
            "range": "± 43482",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4845134,
            "range": "± 165617",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9594944,
            "range": "± 213445",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 20225371,
            "range": "± 1001893",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 40938358,
            "range": "± 1848685",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 30400434,
            "range": "± 195794",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 61149731,
            "range": "± 507750",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 122624991,
            "range": "± 744377",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 244131441,
            "range": "± 1339896",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 485129170,
            "range": "± 3688793",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 177897,
            "range": "± 75336",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1472539,
            "range": "± 78650",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19373554,
            "range": "± 1897326",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 78381383,
            "range": "± 6460643",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1014,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 43064,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1627504,
            "range": "± 10876",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 17317593,
            "range": "± 215737",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ee0f8d7b9a62e92de57f3d34f1dca390772d14a",
          "message": "feat: Add basic object_store support (#1243)\n\n* Save work\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* feat: Add basic object_store support\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Add CI\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T17:06:17+08:00",
          "tree_id": "12cb5d6e6fc6ca3b32f3e9be44382694073ed291",
          "url": "https://github.com/datafuselabs/opendal/commit/6ee0f8d7b9a62e92de57f3d34f1dca390772d14a"
        },
        "date": 1674898053533,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 395661,
            "range": "± 20006",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 379467,
            "range": "± 19718",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 124403,
            "range": "± 21214",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 992678,
            "range": "± 279527",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 15661412,
            "range": "± 1576768",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 61940104,
            "range": "± 21484926",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 122337,
            "range": "± 19109",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1537340,
            "range": "± 158011",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 25553435,
            "range": "± 4210779",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 100343968,
            "range": "± 19963852",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 123330,
            "range": "± 25764",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 123760,
            "range": "± 35889",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 175171,
            "range": "± 19466",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 343021,
            "range": "± 35047",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 715331,
            "range": "± 39328",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 682048,
            "range": "± 130887",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 671676,
            "range": "± 97622",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 946868,
            "range": "± 203557",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1771635,
            "range": "± 125298",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 3925710,
            "range": "± 389293",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 10700085,
            "range": "± 1378477",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 8490193,
            "range": "± 1899516",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 17197952,
            "range": "± 1229110",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 47123829,
            "range": "± 2249624",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 91468932,
            "range": "± 5490208",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 45029500,
            "range": "± 6276839",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 54051584,
            "range": "± 5990232",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 92403891,
            "range": "± 4701831",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 187290239,
            "range": "± 7215309",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 365546477,
            "range": "± 10650857",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1544,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 33154,
            "range": "± 1511",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 495805,
            "range": "± 23179",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 3177499,
            "range": "± 572002",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 2219,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 96854,
            "range": "± 5254",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1945897,
            "range": "± 124454",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 23593029,
            "range": "± 1487511",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2797,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4879,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 10774,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 19244,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 42995,
            "range": "± 2225",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 137190,
            "range": "± 7290",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 268467,
            "range": "± 13588",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 550425,
            "range": "± 27139",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 1081321,
            "range": "± 47733",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 2150611,
            "range": "± 100630",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3961291,
            "range": "± 421540",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 8025934,
            "range": "± 1020326",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 15142765,
            "range": "± 1864116",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 31325173,
            "range": "± 3579384",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 68304730,
            "range": "± 8075001",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 49406068,
            "range": "± 1903907",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 98266492,
            "range": "± 3779359",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 197213285,
            "range": "± 4587512",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 398855236,
            "range": "± 8528221",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 794149371,
            "range": "± 13674992",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 376931,
            "range": "± 109801",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2472729,
            "range": "± 260950",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 29512799,
            "range": "± 2627283",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 116309869,
            "range": "± 10004072",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1542,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 95400,
            "range": "± 6154",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2674792,
            "range": "± 160927",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 30321558,
            "range": "± 1285408",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "663672db354ab83015a1939ddecf0cfe4045ae8a",
          "message": "docs: Add bindings in README (#1244)\n\n* docs: Add bindings in README\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Add readme for bindings\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T17:32:45+08:00",
          "tree_id": "64cf991122b5dae95d153c82b9d0a7dd13fab0ff",
          "url": "https://github.com/datafuselabs/opendal/commit/663672db354ab83015a1939ddecf0cfe4045ae8a"
        },
        "date": 1674899431822,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 323258,
            "range": "± 10643",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 332520,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 86750,
            "range": "± 16022",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 760559,
            "range": "± 14739",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11334075,
            "range": "± 146922",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48091453,
            "range": "± 911629",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87925,
            "range": "± 8661",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1115706,
            "range": "± 91705",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17113629,
            "range": "± 301225",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73179184,
            "range": "± 1383010",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88127,
            "range": "± 3018",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 77970,
            "range": "± 12016",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 115190,
            "range": "± 21671",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 274208,
            "range": "± 29093",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 435901,
            "range": "± 50075",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 445744,
            "range": "± 5853",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 281669,
            "range": "± 27539",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 537594,
            "range": "± 4033",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1090248,
            "range": "± 61672",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2232312,
            "range": "± 36595",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6607679,
            "range": "± 291621",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6065326,
            "range": "± 471780",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 8926726,
            "range": "± 328409",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 28116913,
            "range": "± 1441293",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 58514633,
            "range": "± 2903967",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 28904692,
            "range": "± 481046",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 28832845,
            "range": "± 1015275",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 55305141,
            "range": "± 1234637",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 111137370,
            "range": "± 4172088",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 188104943,
            "range": "± 35003308",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1088,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12919,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 432721,
            "range": "± 1132",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1752777,
            "range": "± 15363",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1378,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 45614,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1397660,
            "range": "± 1771",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 12905778,
            "range": "± 144945",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1723,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 2893,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5689,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11319,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 26447,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 88904,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 178462,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 356010,
            "range": "± 790",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 711115,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1422318,
            "range": "± 908",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2257488,
            "range": "± 2738",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4514279,
            "range": "± 9168",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9022552,
            "range": "± 21410",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17209586,
            "range": "± 48326",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 34424523,
            "range": "± 53773",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 27069613,
            "range": "± 306832",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 55987049,
            "range": "± 890834",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 112107003,
            "range": "± 757202",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 225138260,
            "range": "± 1588583",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 448813981,
            "range": "± 2912136",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 166973,
            "range": "± 118186",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1377848,
            "range": "± 31864",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19594463,
            "range": "± 2329379",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 76058634,
            "range": "± 8937676",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 941,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 43355,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1623947,
            "range": "± 1184",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 14942188,
            "range": "± 262264",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2cdb26b81f1afef85cac6632f7718e0267016082",
          "message": "chore: Fix binding of object_store (#1245)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T17:36:13+08:00",
          "tree_id": "bc117ee7a914c77ddeded187638b70ec163f2934",
          "url": "https://github.com/datafuselabs/opendal/commit/2cdb26b81f1afef85cac6632f7718e0267016082"
        },
        "date": 1674900065415,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 340258,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 304588,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 86626,
            "range": "± 13827",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 767539,
            "range": "± 12218",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11410107,
            "range": "± 169905",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48870937,
            "range": "± 832022",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88366,
            "range": "± 1492",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1119365,
            "range": "± 23089",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17060054,
            "range": "± 294398",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73371924,
            "range": "± 1336342",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 86990,
            "range": "± 1222",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 81099,
            "range": "± 14187",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 143775,
            "range": "± 20357",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 224939,
            "range": "± 23645",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 458719,
            "range": "± 18548",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 444266,
            "range": "± 7782",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 282572,
            "range": "± 41068",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 542478,
            "range": "± 15049",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1081831,
            "range": "± 61907",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2252149,
            "range": "± 223185",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6564210,
            "range": "± 252418",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 5456515,
            "range": "± 500272",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 8924998,
            "range": "± 206393",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29343999,
            "range": "± 592999",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 59320693,
            "range": "± 4196002",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 29209018,
            "range": "± 585649",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 29072172,
            "range": "± 2547078",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 56323348,
            "range": "± 2911324",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 111263201,
            "range": "± 7457930",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 187336202,
            "range": "± 33493325",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1061,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12662,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 440450,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1922731,
            "range": "± 27249",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1361,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 46779,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1564561,
            "range": "± 3661",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14182701,
            "range": "± 140642",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1785,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3040,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5869,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11484,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 22981,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 82548,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 164319,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 329725,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 657222,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1314425,
            "range": "± 1107",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2193777,
            "range": "± 28927",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4604752,
            "range": "± 57006",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9108416,
            "range": "± 80557",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 18226498,
            "range": "± 225956",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 36366724,
            "range": "± 304143",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29254992,
            "range": "± 334624",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 56672252,
            "range": "± 797603",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 113197151,
            "range": "± 1001359",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 227448432,
            "range": "± 1970250",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 454168424,
            "range": "± 3358000",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 163162,
            "range": "± 42135",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1406209,
            "range": "± 64897",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19634082,
            "range": "± 2498673",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 74909941,
            "range": "± 11056401",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 985,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 50189,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1631060,
            "range": "± 4247",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 16141272,
            "range": "± 363684",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17a237f1e0fcf239c43c0d5ed5e070b2176c1afe",
          "message": "feat: Implement webdav support (#1246)\n\n* feat: Implement webdav support\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix typo\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix temp location\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n---------\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T19:21:31+08:00",
          "tree_id": "ab9f5f80e56d45ab79a9788443b50b932c0a2913",
          "url": "https://github.com/datafuselabs/opendal/commit/17a237f1e0fcf239c43c0d5ed5e070b2176c1afe"
        },
        "date": 1674906101787,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 406113,
            "range": "± 23722",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 382443,
            "range": "± 27208",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 126955,
            "range": "± 18775",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 983119,
            "range": "± 343390",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 16656003,
            "range": "± 8690977",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 67203556,
            "range": "± 10306951",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 126256,
            "range": "± 17799",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1559410,
            "range": "± 416343",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 24483854,
            "range": "± 4656790",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 104657519,
            "range": "± 25540771",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 128360,
            "range": "± 36861",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 131349,
            "range": "± 23231",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 204710,
            "range": "± 30511",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 335713,
            "range": "± 37290",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 655460,
            "range": "± 54967",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 650943,
            "range": "± 121899",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 675511,
            "range": "± 83683",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 897281,
            "range": "± 85687",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1805511,
            "range": "± 181305",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 3568977,
            "range": "± 250143",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 10022547,
            "range": "± 1551512",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 8750061,
            "range": "± 1663258",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 15029485,
            "range": "± 1941472",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 46001731,
            "range": "± 2410824",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 89327701,
            "range": "± 5805788",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 45015744,
            "range": "± 4519230",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 52945431,
            "range": "± 5736049",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 90788938,
            "range": "± 5863165",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 182615894,
            "range": "± 8429915",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 360109077,
            "range": "± 12892231",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1437,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 34329,
            "range": "± 2019",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 503850,
            "range": "± 35865",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2717578,
            "range": "± 524052",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 2185,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 95366,
            "range": "± 5940",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 2000136,
            "range": "± 225126",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 11770005,
            "range": "± 498417",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2666,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 5004,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 9329,
            "range": "± 594",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 19531,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 37098,
            "range": "± 4561",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 138550,
            "range": "± 8617",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 277030,
            "range": "± 20942",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 547610,
            "range": "± 39542",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 1104303,
            "range": "± 90630",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 2202261,
            "range": "± 153404",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3212233,
            "range": "± 425529",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6036374,
            "range": "± 698799",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 12864046,
            "range": "± 1360460",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 24754639,
            "range": "± 3279201",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 50832733,
            "range": "± 5593963",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 19043201,
            "range": "± 860683",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 37948730,
            "range": "± 1852093",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 74848387,
            "range": "± 3849301",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 150303658,
            "range": "± 6912642",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 300776518,
            "range": "± 9256696",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 651840,
            "range": "± 180375",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2718921,
            "range": "± 381013",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 28697775,
            "range": "± 3720562",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 120197703,
            "range": "± 16402181",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1337,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 97802,
            "range": "± 5254",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 3209402,
            "range": "± 343621",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 19481345,
            "range": "± 1080993",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07abad34a1ed159cb06b06b1d11af37b7d440331",
          "message": "docs: Add docs for webdav and http services (#1248)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T21:14:39+08:00",
          "tree_id": "07f45add141539b3a0056e6a38afad8eeb7bd1fa",
          "url": "https://github.com/datafuselabs/opendal/commit/07abad34a1ed159cb06b06b1d11af37b7d440331"
        },
        "date": 1674913369899,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 401944,
            "range": "± 64902",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 383717,
            "range": "± 25116",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 121546,
            "range": "± 34246",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 1051493,
            "range": "± 104354",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 15961404,
            "range": "± 1865190",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 65523496,
            "range": "± 7830549",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 124071,
            "range": "± 15642",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1543419,
            "range": "± 238599",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 24089401,
            "range": "± 3481133",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 103215718,
            "range": "± 14324755",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 125440,
            "range": "± 21239",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 123886,
            "range": "± 30622",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 169233,
            "range": "± 17290",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 328281,
            "range": "± 30738",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 681498,
            "range": "± 42973",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 637725,
            "range": "± 82939",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 658974,
            "range": "± 109608",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 915519,
            "range": "± 78172",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1815367,
            "range": "± 169389",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 3971152,
            "range": "± 377812",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 9398514,
            "range": "± 2035156",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 7904025,
            "range": "± 1134907",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 14020309,
            "range": "± 1445544",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 44450645,
            "range": "± 2275047",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 89314728,
            "range": "± 5028978",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 44172560,
            "range": "± 3600427",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 50955616,
            "range": "± 6390888",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 92944063,
            "range": "± 8088917",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 180479966,
            "range": "± 8118321",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 357413240,
            "range": "± 10471721",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1404,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 33667,
            "range": "± 2016",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 517811,
            "range": "± 26298",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2413059,
            "range": "± 277305",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 2227,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 97354,
            "range": "± 11042",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1776755,
            "range": "± 151749",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 22064017,
            "range": "± 814298",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2898,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 5615,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 9781,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 19064,
            "range": "± 1614",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 38533,
            "range": "± 2290",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 203082,
            "range": "± 11381",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 420330,
            "range": "± 17685",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 850252,
            "range": "± 64099",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 1692286,
            "range": "± 86994",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 3322249,
            "range": "± 177466",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3407421,
            "range": "± 278282",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6665818,
            "range": "± 571047",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 13633229,
            "range": "± 1236548",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 28835677,
            "range": "± 3012341",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 54945396,
            "range": "± 4606974",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 48814249,
            "range": "± 1918178",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 96451957,
            "range": "± 3247484",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 197843850,
            "range": "± 7358675",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 388660150,
            "range": "± 7712249",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 780883910,
            "range": "± 13597151",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 636703,
            "range": "± 301934",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2690428,
            "range": "± 556825",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 30271856,
            "range": "± 5237142",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 119137488,
            "range": "± 10658829",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1470,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 97892,
            "range": "± 8066",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2236152,
            "range": "± 141040",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 30105858,
            "range": "± 1804224",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cfd5a8a9389f661efc6618f55ef963ab7a61f45f",
          "message": "docs: Add webdav in lib docs (#1249)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T21:18:28+08:00",
          "tree_id": "8fb39e6ff30b606205db33c8754a2c8600d954aa",
          "url": "https://github.com/datafuselabs/opendal/commit/cfd5a8a9389f661efc6618f55ef963ab7a61f45f"
        },
        "date": 1674914111599,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 357203,
            "range": "± 2543",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 343215,
            "range": "± 1135",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 100768,
            "range": "± 8969",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 900086,
            "range": "± 72784",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 13213852,
            "range": "± 507159",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 57418736,
            "range": "± 4016096",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 103094,
            "range": "± 2054",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1302114,
            "range": "± 139922",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 20479338,
            "range": "± 3122476",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 89530496,
            "range": "± 3533505",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 109307,
            "range": "± 22191",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 106664,
            "range": "± 6860",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 152783,
            "range": "± 5070",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 316340,
            "range": "± 10076",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 655231,
            "range": "± 27360",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 546729,
            "range": "± 23629",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 411051,
            "range": "± 30860",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 778115,
            "range": "± 33732",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1510159,
            "range": "± 70624",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 3287584,
            "range": "± 353815",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7620652,
            "range": "± 328656",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 8817141,
            "range": "± 942394",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 15530528,
            "range": "± 1443650",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 43829820,
            "range": "± 2123052",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 82906870,
            "range": "± 4803662",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 35252814,
            "range": "± 662788",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 44058491,
            "range": "± 2256540",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 79699847,
            "range": "± 2434658",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 164053092,
            "range": "± 9852878",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 320492083,
            "range": "± 15278335",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1230,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 15739,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 558133,
            "range": "± 3386",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4429897,
            "range": "± 46631",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1840,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 64707,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1898748,
            "range": "± 78067",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 22379013,
            "range": "± 138047",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2291,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4065,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 8169,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 16058,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 32297,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 116482,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 232305,
            "range": "± 1079",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 463105,
            "range": "± 3119",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 930532,
            "range": "± 4005",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1856245,
            "range": "± 10614",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2939119,
            "range": "± 165272",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5776544,
            "range": "± 279341",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 11712095,
            "range": "± 449529",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 25845717,
            "range": "± 1212499",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 53070709,
            "range": "± 2914377",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 41971650,
            "range": "± 465558",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 84742584,
            "range": "± 1376793",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 167864050,
            "range": "± 1626717",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 337535933,
            "range": "± 4105752",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 671474979,
            "range": "± 4205027",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 210210,
            "range": "± 41069",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1876348,
            "range": "± 228083",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 24824106,
            "range": "± 1173221",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 101860214,
            "range": "± 5654783",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1288,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 55621,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2517302,
            "range": "± 239351",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 25661545,
            "range": "± 702721",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me.ssword@gmail.com",
            "name": "flaneur",
            "username": "flaneur2020"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06b3bdbe9516612159bff1f1f28ef1d69adf10f2",
          "message": "feat: Allow passing content_type to OSS presign (#1252)\n\n* add content type to op-multipart-write\r\n\r\n* pass content_type in presign oss\r\n\r\n* add presign_write_with\r\n\r\n* Revert \"add content type to op-multipart-write\"\r\n\r\nThis reverts commit c0fe8065cb001db25c5080d1bb1a78847fa639bd.\r\n\r\n* cargo fmt",
          "timestamp": "2023-01-29T19:57:20+08:00",
          "tree_id": "7d4bdd8f4f5f25bb7ad50a7d8df59a05a27de0c9",
          "url": "https://github.com/datafuselabs/opendal/commit/06b3bdbe9516612159bff1f1f28ef1d69adf10f2"
        },
        "date": 1674994499872,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 327337,
            "range": "± 1872",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 309392,
            "range": "± 822",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 85514,
            "range": "± 9640",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 754547,
            "range": "± 19909",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11355189,
            "range": "± 270603",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 53876795,
            "range": "± 9364376",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88590,
            "range": "± 7141",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1116150,
            "range": "± 26165",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17196035,
            "range": "± 1430998",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73074976,
            "range": "± 4243400",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88663,
            "range": "± 1616",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 71966,
            "range": "± 6151",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 138999,
            "range": "± 3505",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 279564,
            "range": "± 9349",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 541382,
            "range": "± 14339",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 453625,
            "range": "± 6610",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 482550,
            "range": "± 19866",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 666646,
            "range": "± 12570",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1302002,
            "range": "± 24492",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2679541,
            "range": "± 46327",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6650423,
            "range": "± 296344",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6716799,
            "range": "± 298613",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 11472531,
            "range": "± 1030155",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 37103982,
            "range": "± 824410",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 75585160,
            "range": "± 4227217",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 31449574,
            "range": "± 1863799",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 34636747,
            "range": "± 2155190",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 67693179,
            "range": "± 2630881",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 140043490,
            "range": "± 2878038",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 237369671,
            "range": "± 17699016",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1051,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12667,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 505699,
            "range": "± 7661",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4300651,
            "range": "± 163536",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1543,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 59299,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 2204948,
            "range": "± 366490",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13291251,
            "range": "± 90400",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1966,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4057,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7950,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13669,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27164,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 106796,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 213459,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 428048,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 853569,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1711596,
            "range": "± 1797",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2498031,
            "range": "± 108847",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4912930,
            "range": "± 164126",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 10846915,
            "range": "± 898899",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 21535340,
            "range": "± 1361573",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 42466174,
            "range": "± 1703635",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 18699368,
            "range": "± 177580",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 37544154,
            "range": "± 345843",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 74911899,
            "range": "± 708050",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 151299672,
            "range": "± 1453018",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 299976247,
            "range": "± 1977413",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 187983,
            "range": "± 41765",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1493750,
            "range": "± 176030",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 20734791,
            "range": "± 3533748",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 79343983,
            "range": "± 14219166",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1084,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 41449,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1901861,
            "range": "± 36281",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 12723087,
            "range": "± 208426",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4df7cc877c3106e0913bd33d06c1aa0e64b81a2",
          "message": "feat: Make sure short functions have been inlined (#1253)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-30T02:01:38+08:00",
          "tree_id": "2becfd00f23f5d799b8c7de5aa2d9cb50a5b2a49",
          "url": "https://github.com/datafuselabs/opendal/commit/d4df7cc877c3106e0913bd33d06c1aa0e64b81a2"
        },
        "date": 1675016481277,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 339840,
            "range": "± 28278",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 317253,
            "range": "± 21060",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 97755,
            "range": "± 25776",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 960892,
            "range": "± 281142",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 13229821,
            "range": "± 1496437",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 53845792,
            "range": "± 5194226",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 103203,
            "range": "± 13486",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1323804,
            "range": "± 176922",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 20140638,
            "range": "± 2698110",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 82809077,
            "range": "± 8376840",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 101736,
            "range": "± 29876",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 103187,
            "range": "± 15786",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 159703,
            "range": "± 20008",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 313169,
            "range": "± 34747",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 573815,
            "range": "± 62784",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 560015,
            "range": "± 79608",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 556678,
            "range": "± 60507",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 744276,
            "range": "± 153654",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1490987,
            "range": "± 98383",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2986295,
            "range": "± 303714",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7439215,
            "range": "± 878361",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6725547,
            "range": "± 1066694",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 12926142,
            "range": "± 1410394",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 35397699,
            "range": "± 3272901",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 77318290,
            "range": "± 6495990",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 34391163,
            "range": "± 5482258",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 41683942,
            "range": "± 4202446",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 77606877,
            "range": "± 4774809",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 152436525,
            "range": "± 7976535",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 298280744,
            "range": "± 12759482",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1141,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 27272,
            "range": "± 1621",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 442664,
            "range": "± 24735",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1872044,
            "range": "± 629839",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1875,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 79537,
            "range": "± 3816",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1589960,
            "range": "± 70474",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 17974775,
            "range": "± 1122431",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2042,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3750,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7420,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 14696,
            "range": "± 1362",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 28998,
            "range": "± 2079",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 113894,
            "range": "± 6398",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 231551,
            "range": "± 20420",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 465375,
            "range": "± 27670",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 943933,
            "range": "± 60643",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1839423,
            "range": "± 122451",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2507411,
            "range": "± 413436",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4888193,
            "range": "± 986466",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9791146,
            "range": "± 1075416",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 19861987,
            "range": "± 4525048",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 39640025,
            "range": "± 7839531",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 40328901,
            "range": "± 1807751",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 85647769,
            "range": "± 6339371",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 176762536,
            "range": "± 9941851",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 370205309,
            "range": "± 13895925",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 723461791,
            "range": "± 21716706",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 357464,
            "range": "± 83031",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2153333,
            "range": "± 343147",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 24992734,
            "range": "± 2938794",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 106431775,
            "range": "± 12610081",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1235,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 92100,
            "range": "± 5516",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1984757,
            "range": "± 182736",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 26276240,
            "range": "± 1544862",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69894d1cbf505e65786896c98ed589951c52cb96",
          "message": "chore(deps): bump amondnet/vercel-action from 25.1.0 to 25.1.1 (#1254)\n\nBumps [amondnet/vercel-action](https://github.com/amondnet/vercel-action) from 25.1.0 to 25.1.1.\r\n- [Release notes](https://github.com/amondnet/vercel-action/releases)\r\n- [Changelog](https://github.com/amondnet/vercel-action/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/amondnet/vercel-action/compare/v25.1.0...v25.1.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: amondnet/vercel-action\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-01-30T12:41:46+08:00",
          "tree_id": "faff33a7e0fc59750a7a78654fa00428d0f00897",
          "url": "https://github.com/datafuselabs/opendal/commit/69894d1cbf505e65786896c98ed589951c52cb96"
        },
        "date": 1675054859461,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 329951,
            "range": "± 5592",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 305853,
            "range": "± 1237",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 85207,
            "range": "± 10428",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 741737,
            "range": "± 11929",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 10965123,
            "range": "± 1281822",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 46870467,
            "range": "± 2463601",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 85800,
            "range": "± 1620",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1085050,
            "range": "± 76406",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16620139,
            "range": "± 273255",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 70790405,
            "range": "± 964592",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 86230,
            "range": "± 9313",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 90069,
            "range": "± 5130",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 132129,
            "range": "± 1690",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 265688,
            "range": "± 7923",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 582593,
            "range": "± 23037",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 148588,
            "range": "± 20598",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 212024,
            "range": "± 3650",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 307310,
            "range": "± 12003",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 524437,
            "range": "± 10430",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1061373,
            "range": "± 31877",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1396309,
            "range": "± 68350",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2573216,
            "range": "± 151270",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 5390113,
            "range": "± 296054",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 27004425,
            "range": "± 3181102",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 55704216,
            "range": "± 3323738",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 8631670,
            "range": "± 133236",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 22319901,
            "range": "± 500995",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 45930013,
            "range": "± 1335364",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 93901540,
            "range": "± 3096350",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 194719486,
            "range": "± 6432587",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1046,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13122,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 496602,
            "range": "± 1634",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4200346,
            "range": "± 42528",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 57502,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1601312,
            "range": "± 17441",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 21373284,
            "range": "± 57609",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1997,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3975,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6877,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 15409,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27094,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 103220,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 205465,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 410589,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 821459,
            "range": "± 1204",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1642668,
            "range": "± 2220",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2848725,
            "range": "± 119540",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5562234,
            "range": "± 221892",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 11078520,
            "range": "± 558603",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 22127953,
            "range": "± 1038056",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 42233717,
            "range": "± 2122676",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 38889587,
            "range": "± 252090",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 77592221,
            "range": "± 495436",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 155499147,
            "range": "± 707161",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 311733386,
            "range": "± 1324446",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 621493424,
            "range": "± 3374052",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 225601,
            "range": "± 63313",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1539563,
            "range": "± 97375",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19455559,
            "range": "± 1205205",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 82175918,
            "range": "± 1179486",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1062,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 42512,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1961214,
            "range": "± 71442",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 22766192,
            "range": "± 211103",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}