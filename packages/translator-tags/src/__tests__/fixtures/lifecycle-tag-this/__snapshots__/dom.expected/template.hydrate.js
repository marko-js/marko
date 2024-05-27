// size: 453 (min) 237 (brotli)

import {
  register as t,
  lifecycle as n,
  on as o,
  queueSource as e,
  value as c,
  queueEffect as r,
  init as u,
} from "@marko/runtime-tags/dom";
const i = t(
    "b",
    (t) =>
      function () {
        this.onUpdate();
      },
  ),
  s = t("c", (t) => {
    const { 1: n } = t;
    return function () {
      (document.getElementById("ref").textContent = `x=${n}, was=${this.cur}`),
        (this.cur = n);
    };
  }),
  m = t("e", (t) => {
    n(t, 3, { onMount: i(t), onUpdate: s(t) }),
      o(
        t[0],
        "click",
        ((t) => {
          const { 1: n } = t;
          return function () {
            e(t, a, n + 1);
          };
        })(t),
      );
  }),
  a = c(1, (t, n) => r(t, m));
u();
