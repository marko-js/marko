// size: 333 (min) 181 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const o = t.state(6, (a, o) => t.data(a[3], o)),
  m = t.state(5, (a, o) => t.data(a[2], o)),
  r = t.effect("a0", (a) =>
    t.on(
      a[0],
      "click",
      ((t) => {
        const { 4: a } = t;
        return function () {
          const r = m(t, (n(t, a + 1), a));
          o(t, r);
        };
      })(a),
    ),
  ),
  n = t.state(4, (a, o) => {
    t.data(a[1], o), r(a);
  });
a();
