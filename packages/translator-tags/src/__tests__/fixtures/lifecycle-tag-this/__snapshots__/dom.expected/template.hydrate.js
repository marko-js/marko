// size: 407 (min) 224 (brotli)

import {
  register as t,
  lifecycle as n,
  on as o,
  state as e,
  queueEffect as c,
  init as r,
} from "@marko/runtime-tags/dom";
const u = (t) => {
    const { 1: n } = t;
    return function () {
      (document.getElementById("ref").textContent = `x=${n}, was=${this.cur}`),
        (this.cur = n);
    };
  },
  i = t("a0", (t) => {
    n(t, 3, {
      onMount: function () {
        this.onUpdate();
      },
      onUpdate: u(t),
    }),
      o(
        t[0],
        "click",
        ((t) => {
          const { 1: n } = t;
          return function () {
            s(t, n + 1);
          };
        })(t),
      );
  }),
  s = e(1, (t, n) => c(t, i));
r();
