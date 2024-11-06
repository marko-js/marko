// size: 275 (min) 165 (brotli)

import {
  register as t,
  on as n,
  state as o,
  queueEffect as e,
  init as c,
} from "@marko/runtime-tags/dom";
const m = t("a0", (t) => {
    const { 1: o } = t;
    (document.getElementById("button").textContent = o),
      n(
        t[0],
        "click",
        ((t) => {
          const { 1: n } = t;
          return function () {
            r(t, n + 1);
          };
        })(t),
      );
  }),
  r = o(1, (t, n) => e(t, m));
c();
