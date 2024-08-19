// size: 426 (min) 230 (brotli)

import {
  register as t,
  lifecycle as n,
  on as o,
  queueSource as e,
  value as c,
  queueEffect as r,
  init as u,
} from "@marko/runtime-tags/dom";
const i = (t) => {
    const { 1: n } = t;
    return function () {
      (document.getElementById("ref").textContent = `x=${n}, was=${this.cur}`),
        (this.cur = n);
    };
  },
  s = t("a0", (t) => {
    n(t, 3, {
      onMount: function () {
        this.onUpdate();
      },
      onUpdate: i(t),
    }),
      o(
        t[0],
        "click",
        ((t) => {
          const { 1: n } = t;
          return function () {
            e(t, m, n + 1);
          };
        })(t),
      );
  }),
  m = c(1, (t, n) => r(t, s));
u();
