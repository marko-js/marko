// size: 408 (min) 215 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as n } from "@marko/runtime-tags/dom";
const o = (t) => {
    const { 1: n } = t;
    return function () {
      (document.getElementById("ref").textContent = `x=${n}, was=${this.cur}`),
        (this.cur = n);
    };
  },
  e = t.effect("a0", (n) => {
    t.lifecycle(n, 3, {
      onMount: function () {
        this.onUpdate();
      },
      onUpdate: o(n),
    }),
      t.on(
        n[0],
        "click",
        ((t) => {
          const { 1: n } = t;
          return function () {
            r(t, n + 1);
          };
        })(n),
      );
  }),
  r = t.state(1, (t, n) => e(t));
n();
