// size: 313 (min) 183 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const o = t.effect("a0", (a) =>
    t.on(
      a[0],
      "click",
      ((t) => {
        const { 3: a, 4: o } = t;
        return () => e(t, m(t, a + o));
      })(a),
    ),
  ),
  r = t.intersection(2, (t) => {
    o(t);
  }),
  m = t.state(
    4,
    (a, o) => t.data(a[2], o),
    () => r,
  ),
  e = t.state(
    3,
    (a, o) => t.data(a[1], o),
    () => r,
  );
a();
