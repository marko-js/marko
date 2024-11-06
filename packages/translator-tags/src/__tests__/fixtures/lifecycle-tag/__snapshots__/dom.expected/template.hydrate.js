// size: 452 (min) 209 (brotli)

import {
  register as t,
  lifecycle as n,
  on as e,
  state as o,
  queueEffect as r,
  init as c,
} from "@marko/runtime-tags/dom";
const u = (t) => {
    const { 1: n } = t;
    return function () {
      document.getElementById("ref").textContent = "Mount " + n;
    };
  },
  m = (t) => {
    const { 1: n } = t;
    return function () {
      document.getElementById("ref").textContent = "Update " + n;
    };
  },
  d = t("a0", (t) => {
    n(t, 3, { onMount: u(t), onUpdate: m(t) }),
      e(
        t[0],
        "click",
        ((t) => {
          const { 1: n } = t;
          return function () {
            f(t, n + 1);
          };
        })(t),
      );
  }),
  f = o(1, (t, n) => r(t, d));
c();
