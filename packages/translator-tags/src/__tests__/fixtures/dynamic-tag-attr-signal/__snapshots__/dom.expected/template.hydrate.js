// size: 252 (min) 162 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const r = t.effect("a0", (o) =>
    t.on(
      o[1],
      "click",
      ((t) => {
        const { 2: o } = t;
        return function () {
          m(t, "A" === o ? "B" : "A");
        };
      })(o),
    ),
  ),
  m = t.state(2, (o, m) => {
    t.classAttr(o[0], m), r(o);
  });
o();
