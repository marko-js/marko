// size: 386 (min) 214 (brotli)

import {
  effect as t,
  lifecycle as n,
  on as o,
  state as e,
  init as c,
} from "@marko/runtime-tags/dom";
const r = (t) => {
    const { 1: n } = t;
    return function () {
      (document.getElementById("ref").textContent = `x=${n}, was=${this.cur}`),
        (this.cur = n);
    };
  },
  u = t("a0", (t) => {
    n(t, 3, {
      onMount: function () {
        this.onUpdate();
      },
      onUpdate: r(t),
    }),
      o(
        t[0],
        "click",
        ((t) => {
          const { 1: n } = t;
          return function () {
            i(t, n + 1);
          };
        })(t),
      );
  }),
  i = e(1, (t, n) => u(t));
c();
