// size: 254 (min) 153 (brotli)

import {
  effect as t,
  on as n,
  state as o,
  init as e,
} from "@marko/runtime-tags/dom";
const c = t("a0", (t) => {
    const { 1: o } = t;
    (document.getElementById("button").textContent = o),
      n(
        t[0],
        "click",
        ((t) => {
          const { 1: n } = t;
          return function () {
            m(t, n + 1);
          };
        })(t),
      );
  }),
  m = o(1, (t, n) => c(t));
e();
