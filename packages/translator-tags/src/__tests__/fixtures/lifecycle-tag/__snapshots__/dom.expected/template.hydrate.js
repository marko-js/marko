// size: 431 (min) 196 (brotli)

import {
  effect as t,
  lifecycle as n,
  on as e,
  state as o,
  init as r,
} from "@marko/runtime-tags/dom";
const c = (t) => {
    const { 1: n } = t;
    return function () {
      document.getElementById("ref").textContent = "Mount " + n;
    };
  },
  u = (t) => {
    const { 1: n } = t;
    return function () {
      document.getElementById("ref").textContent = "Update " + n;
    };
  },
  m = t("a0", (t) => {
    n(t, 3, { onMount: c(t), onUpdate: u(t) }),
      e(
        t[0],
        "click",
        ((t) => {
          const { 1: n } = t;
          return function () {
            d(t, n + 1);
          };
        })(t),
      );
  }),
  d = o(1, (t, n) => m(t));
r();
