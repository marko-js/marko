// size: 423 (min) 232 (brotli)

import {
  effect as o,
  on as t,
  state as r,
  data as c,
  intersections as m,
  value as n,
  intersection as s,
  init as a,
} from "@marko/runtime-tags/dom";
const i = s(2, (o) => {
    const { 6: t, 7: r } = o;
    e(o, t + r);
  }),
  e = n(8, (o, t) => c(o[4], t)),
  k = n(
    7,
    (o, t) => c(o[3], t),
    () => i,
  ),
  u = n(
    6,
    (o, t) => c(o[2], t),
    () => i,
  ),
  d = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 5: t } = o;
        return () => (f(o, t + 1), t);
      })(o),
    ),
  ),
  f = r(
    5,
    (o, t) => {
      c(o[1], t), d(o), u(o, t + 1), k(o, t + 2);
    },
    () => m([u, k]),
  );
a();
