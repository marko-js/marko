// size: 227 (min) 158 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const m = t.effect("a0", (o) =>
    t.on(
      o[0],
      "click",
      ((t) => {
        const { 2: o } = t;
        return function () {
          r(o + 1, t);
        };
      })(o),
    ),
  ),
  r = t.state(2, (o) => {
    t.data(1, o), m();
  });
o();
