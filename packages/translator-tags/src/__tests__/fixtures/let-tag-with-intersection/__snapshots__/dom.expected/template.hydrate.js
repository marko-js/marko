// size: 452 (min) 244 (brotli)

import {
  register as o,
  on as t,
  queueSource as r,
  value as c,
  data as m,
  queueEffect as n,
  intersections as s,
  intersection as a,
  init as i,
} from "@marko/runtime-tags/dom";
const e = a(2, (o) => {
    const { 6: t, 7: r } = o;
    k(o, t + r);
  }),
  k = c(8, (o, t) => m(o[4], t)),
  u = c(
    7,
    (o, t) => m(o[3], t),
    () => e,
  ),
  d = c(
    6,
    (o, t) => m(o[2], t),
    () => e,
  ),
  f = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 5: t } = o;
        return () => (r(o, g, t + 1), t);
      })(o),
    ),
  ),
  g = c(
    5,
    (o, t) => {
      m(o[1], t), n(o, f), d(o, t + 1), u(o, t + 2);
    },
    () => s([d, u]),
  );
i();
