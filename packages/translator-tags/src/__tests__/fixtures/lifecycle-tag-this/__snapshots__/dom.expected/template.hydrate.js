// size: 474 (min) 271 (brotli)

import {
  register as t,
  lifecycle as n,
  on as o,
  queueSource as c,
  value as e,
  queueEffect as r,
  init as i,
} from "@marko/runtime-tags/dom";
const u = t(
    "6DMSHO4N",
    (t) =>
      function () {
        this.onUpdate();
      },
  ),
  s = t("yYDc1kiW", (t) => {
    const { 1: n } = t;
    return function () {
      (document.getElementById("ref").textContent = `x=${n}, was=${this.cur}`),
        (this.cur = n);
    };
  }),
  m = t("M3YbYy96", (t) => {
    n(t, 3, { onMount: u(t), onUpdate: s(t) }),
      o(
        t[0],
        "click",
        ((t) => {
          const { 1: n } = t;
          return function () {
            c(t, a, n + 1);
          };
        })(t),
      );
  }),
  a = e(1, (t, n) => r(t, m));
i();
