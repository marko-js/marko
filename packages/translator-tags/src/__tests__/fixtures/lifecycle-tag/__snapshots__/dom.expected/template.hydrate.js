// size: 471 (min) 214 (brotli)

import {
  register as t,
  lifecycle as n,
  on as e,
  queueSource as o,
  value as r,
  queueEffect as c,
  init as u,
} from "@marko/runtime-tags/dom";
const m = (t) => {
    const { 1: n } = t;
    return function () {
      document.getElementById("ref").textContent = "Mount " + n;
    };
  },
  d = (t) => {
    const { 1: n } = t;
    return function () {
      document.getElementById("ref").textContent = "Update " + n;
    };
  },
  f = t("a0", (t) => {
    n(t, 3, { onMount: m(t), onUpdate: d(t) }),
      e(
        t[0],
        "click",
        ((t) => {
          const { 1: n } = t;
          return function () {
            o(t, i, n + 1);
          };
        })(t),
      );
  }),
  i = r(1, (t, n) => c(t, f));
u();
