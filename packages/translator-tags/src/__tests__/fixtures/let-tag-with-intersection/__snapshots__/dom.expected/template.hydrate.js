// size: 457 (min) 230 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const o = t.intersection(2, (t) => {
    const { 6: a, 7: o } = t;
    e(t, a + o);
  }),
  e = t.value(8, (a, o) => t.data(a[4], o)),
  r = t.value(
    7,
    (a, o) => t.data(a[3], o),
    () => o,
  ),
  n = t.value(
    6,
    (a, o) => t.data(a[2], o),
    () => o,
  ),
  m = t.effect("a0", (a) =>
    t.on(
      a[0],
      "click",
      ((t) => {
        const { 5: a } = t;
        return () => (s(t, a + 1), a);
      })(a),
    ),
  ),
  s = t.state(
    5,
    (a, o) => {
      t.data(a[1], o), m(a), n(a, o + 1), r(a, o + 2);
    },
    () => t.intersections([n, r]),
  );
a();
