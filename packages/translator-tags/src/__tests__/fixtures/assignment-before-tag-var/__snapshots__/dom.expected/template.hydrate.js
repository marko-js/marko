// size: 279 (min) 167 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const o = t.state(4, (a, o) => t.data(a[2], o)),
  m = t.effect("a0", (a) =>
    t.on(
      a[0],
      "click",
      ((t) => {
        const { 3: a } = t;
        return function () {
          o(t, a), r(t, a + 1);
        };
      })(a),
    ),
  ),
  r = t.state(3, (a, o) => {
    t.data(a[1], o), m(a);
  });
a();
