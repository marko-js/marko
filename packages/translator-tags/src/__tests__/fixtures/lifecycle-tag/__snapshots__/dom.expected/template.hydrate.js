// size: 488 (min) 216 (brotli)

import {
  register as t,
  lifecycle as n,
  on as e,
  queueSource as o,
  value as c,
  queueEffect as r,
  init as u,
} from "@marko/runtime-tags/dom";
const m = t("b", (t) => {
    const { 1: n } = t;
    return function () {
      document.getElementById("ref").textContent = "Mount " + n;
    };
  }),
  d = t("c", (t) => {
    const { 1: n } = t;
    return function () {
      document.getElementById("ref").textContent = "Update " + n;
    };
  }),
  f = t("e", (t) => {
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
  i = c(1, (t, n) => r(t, f));
u();
