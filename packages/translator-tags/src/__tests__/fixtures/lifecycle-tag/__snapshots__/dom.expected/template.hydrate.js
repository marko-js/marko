// size: 453 (min) 201 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as n } from "@marko/runtime-tags/dom";
const e = (t) => {
    const { 1: n } = t;
    return function () {
      document.getElementById("ref").textContent = "Mount " + n;
    };
  },
  o = (t) => {
    const { 1: n } = t;
    return function () {
      document.getElementById("ref").textContent = "Update " + n;
    };
  },
  r = t.effect("a0", (n) => {
    t.lifecycle(n, 3, { onMount: e(n), onUpdate: o(n) }),
      t.on(
        n[0],
        "click",
        ((t) => {
          const { 1: n } = t;
          return function () {
            c(t, n + 1);
          };
        })(n),
      );
  }),
  c = t.state(1, (t, n) => r(t));
n();
