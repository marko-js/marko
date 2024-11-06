// size: 271 (min) 173 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const a = t.effect("a0", (o) =>
    t.on(
      o[0],
      "click",
      ((t) => {
        const { 3: o } = t;
        return function () {
          m(t, o + 1);
        };
      })(o),
    ),
  ),
  m = t.state(3, (o, m) => {
    t.data(o[1], m), t.data(o[2], `${m} + ${m} = ${m + m}`), a(o);
  });
o();
