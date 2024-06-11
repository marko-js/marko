// size: 491 (min) 216 (brotli)

import {
  register as t,
  lifecycle as n,
  on as e,
  queueSource as o,
  value as r,
  queueEffect as c,
  init as u,
} from "@marko/runtime-tags/dom";
const m = t("a0", (t) => {
    const { 1: n } = t;
    return function () {
      document.getElementById("ref").textContent = "Mount " + n;
    };
  }),
  a = t("a1", (t) => {
    const { 1: n } = t;
    return function () {
      document.getElementById("ref").textContent = "Update " + n;
    };
  }),
  d = t("a3", (t) => {
    n(t, 3, { onMount: m(t), onUpdate: a(t) }),
      e(
        t[0],
        "click",
        ((t) => {
          const { 1: n } = t;
          return function () {
            o(t, f, n + 1);
          };
        })(t),
      );
  }),
  f = r(1, (t, n) => c(t, d));
u();
