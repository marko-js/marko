// size: 287 (min) 174 (brotli)

import {
  register as t,
  queueSource as o,
  value as r,
  data as n,
  init as e,
} from "@marko/runtime-tags/dom";
import i from "./test-log";
t("a1", function () {
  i.static += "rendered";
}),
  t(
    "a0",
    (t) =>
      function () {
        i.const += "rendered";
      },
  );
const m = r(3, (t, o) => n(t[0], o));
t("a2", (t) => o(t, m, JSON.stringify(i))), e();
