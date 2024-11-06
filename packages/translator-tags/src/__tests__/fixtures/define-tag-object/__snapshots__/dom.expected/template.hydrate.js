// size: 309 (min) 190 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const a = t.value(4, (o, a) => t.data(o[0], JSON.stringify(a))),
  r = t.effect("a0", (o) =>
    t.on(
      o[1],
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
    t.data(o[2], m), r(o), a(o, { foo: 1, bar: m + 1 });
  });
o();
