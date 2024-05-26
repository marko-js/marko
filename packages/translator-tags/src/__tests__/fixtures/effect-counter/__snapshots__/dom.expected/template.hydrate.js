// size: 300 (min) 178 (brotli)

import {
  register as t,
  on as n,
  queueSource as o,
  value as e,
  queueEffect as m,
  init as c,
} from "@marko/runtime-tags/dom";
const r = t("mTNRZVP8", (t) => {
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
  u = e(1, (t, n) => m(t, r));
c();
