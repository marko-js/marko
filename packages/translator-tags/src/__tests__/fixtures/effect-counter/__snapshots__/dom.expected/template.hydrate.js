// size: 294 (min) 170 (brotli)

import {
  register as t,
  on as n,
  queueSource as o,
  value as e,
  queueEffect as c,
  init as m,
} from "@marko/runtime-tags/dom";
const r = t("a0", (t) => {
    const { 1: e } = t;
    (document.getElementById("button").textContent = e),
      n(
        t[0],
        "click",
        ((t) => {
          const { 1: n } = t;
          return function () {
            o(t, u, n + 1);
          };
        })(t),
      );
  }),
  u = e(1, (t, n) => c(t, r));
m();
