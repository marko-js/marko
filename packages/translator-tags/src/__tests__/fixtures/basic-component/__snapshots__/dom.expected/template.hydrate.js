// size: 235 (min) 173 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const m = t.effect("a0", (o) =>
    t.on(
      o[0],
      "click",
      ((t) => {
        const { 2: o } = t;
        return function () {
          r(t, o + 1);
        };
      })(o),
    ),
  ),
  r = t.state(2, (o, r) => {
    t.data(o[1], r), m(o);
  });
o();
