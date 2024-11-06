// size: 281 (min) 157 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const n = t.effect("a0", (o) => {
    const { 1: n } = o;
    (document.getElementById("button").textContent = n),
      t.on(
        o[0],
        "click",
        ((t) => {
          const { 1: o } = t;
          return function () {
            e(t, o + 1);
          };
        })(o),
      );
  }),
  e = t.state(1, (t, o) => n(t));
o();
