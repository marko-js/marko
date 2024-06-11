// size: 434 (min) 244 (brotli)

import {
  register as o,
  on as t,
  value as r,
  data as c,
  queueEffect as m,
  intersections as n,
  queueSource as s,
  intersection as a,
  init as i,
} from "@marko/runtime-tags/dom";
const e = a(2, (o) => {
    const { 6: t, 7: r } = o;
    k(o, t + r);
  }),
  k = r(8, (o, t) => c(o[4], t)),
  u = r(7, (o, t) => c(o[3], t), e),
  d = r(6, (o, t) => c(o[2], t), e),
  f = o("a1", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 5: t } = o;
        return () => (s(o, g, t + 1), t);
      })(o),
    ),
  ),
  g = r(
    5,
    (o, t) => {
      c(o[1], t), m(o, f), d(o, t + 1), u(o, t + 2);
    },
    n([d, u]),
  );
i();
