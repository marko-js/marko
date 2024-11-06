// size: 327 (min) 205 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const n = t.dynamicTagAttrs(2),
  r = t.intersection(
    2,
    (t) => {
      const { 3: o } = t;
      n(t, () => o);
    },
    () => n,
  ),
  m = t.effect("b0", (o) =>
    t.on(
      o[0],
      "click",
      ((t) => {
        const { 3: o } = t;
        return function () {
          a(t, o + 1);
        };
      })(o),
    ),
  ),
  a = t.state(
    3,
    (o, n) => {
      t.data(o[1], n), m(o);
    },
    () => r,
  );
o();
