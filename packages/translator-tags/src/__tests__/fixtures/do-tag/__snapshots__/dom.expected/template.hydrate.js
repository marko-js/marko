// size: 280 (min) 191 (brotli)

import {
  register as t,
  effect as o,
  state as r,
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
o("a2", (t) => m(t, JSON.stringify(i))), e();
