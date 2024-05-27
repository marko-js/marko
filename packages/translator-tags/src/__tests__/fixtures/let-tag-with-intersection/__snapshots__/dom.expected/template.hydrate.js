// size: 433 (min) 244 (brotli)

import {
  register as o,
  on as t,
  value as c,
  data as r,
  queueEffect as m,
  intersections as n,
  queueSource as s,
  intersection as i,
  init as a,
} from "@marko/runtime-tags/dom";
const e = i(2, (o) => {
    const { 6: t, 7: c } = o;
    k(o, t + c);
  }),
  k = c(8, (o, t) => r(o[4], t)),
  u = c(7, (o, t) => r(o[3], t), e),
  d = c(6, (o, t) => r(o[2], t), e),
  f = o("c", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 5: t } = o;
        return () => (s(o, g, t + 1), t);
      })(o),
    ),
  ),
  g = c(
    5,
    (o, t) => {
      r(o[1], t), m(o, f), d(o, t + 1), u(o, t + 2);
    },
    n([d, u]),
  );
a();
