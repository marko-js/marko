// size: 440 (min) 253 (brotli)

import {
  register as o,
  on as t,
  value as r,
  data as c,
  queueEffect as m,
  intersections as n,
  queueSource as s,
  intersection as i,
  init as a,
} from "@marko/runtime-tags/dom";
const e = i(2, (o) => {
    const { 6: t, 7: r } = o;
    g(o, t + r);
  }),
  g = r(8, (o, t) => c(o[4], t)),
  k = r(7, (o, t) => c(o[3], t), e),
  u = r(6, (o, t) => c(o[2], t), e),
  w = o("wTYJwgZV", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 5: t } = o;
        return () => (s(o, d, t + 1), t);
      })(o),
    ),
  ),
  d = r(
    5,
    (o, t) => {
      c(o[1], t), m(o, w), u(o, t + 1), k(o, t + 2);
    },
    n([u, k]),
  );
a();
