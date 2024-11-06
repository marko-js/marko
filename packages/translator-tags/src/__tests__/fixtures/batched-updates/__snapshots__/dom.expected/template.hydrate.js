// size: 316 (min) 186 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const n = t.effect("a0", (o) =>
    t.on(
      o[0],
      "click",
      ((t) => {
        const { 2: o, 3: n } = t;
        return function () {
          m(t, o + 1), a(t, n + 1);
        };
      })(o),
    ),
  ),
  r = t.intersection(2, (o) => {
    const { 2: r, 3: a } = o;
    t.data(o[1], r + a), n(o);
  }),
  a = t.state(3, 0, () => r),
  m = t.state(2, 0, () => r);
o();
