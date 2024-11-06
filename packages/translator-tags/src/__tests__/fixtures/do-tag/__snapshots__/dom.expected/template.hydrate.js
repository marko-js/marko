// size: 268 (min) 170 (brotli)

import {
  register as t,
  state as o,
  data as r,
  init as n,
} from "@marko/runtime-tags/dom";
import e from "./test-log";
t("a1", function () {
  e.static += "rendered";
}),
  t(
    "a0",
    (t) =>
      function () {
        e.const += "rendered";
      },
  );
const i = o(3, (t, o) => r(t[0], o));
t("a2", (t) => i(t, JSON.stringify(e))), n();
