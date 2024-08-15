// size: 345 (min) 189 (brotli)

import {
  register as t,
  queueSource as n,
  value as o,
  data as r,
  init as e,
} from "@marko/runtime-tags/dom";
import i from "./test-log";
t(
  "a0",
  (t) =>
    function () {
      i.block += "rendered";
    },
),
  t(
    "a1",
    (t) =>
      function () {
        i.const += "rendered";
      },
  ),
  t("a1", (t) => {
    const { 2: n } = t;
    return function () {
      i.let += n;
    };
  });
const c = o(3, (t, n) => r(t[0], n));
t("a2", (t) => n(t, c, JSON.stringify(i))), e();
