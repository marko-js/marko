// size: 409 (min) 229 (brotli)

import {
  register as o,
  on as t,
  value as c,
  data as n,
  queueEffect as r,
  queueSource as m,
  intersections as i,
  inChild as s,
  init as u,
} from "@marko/runtime-tags/dom";
const a = c(6, (o, t) => {
    n(o[1], t),
      ((o, t) => {
        n(o[2], t);
      })(o, t);
  }),
  d = o("d", (o) => {
    const { 5: c } = o;
    t(o[0], "click", c);
  }),
  e = c(5, (o, t) => r(o, d)),
  f = o("c", (o) => {
    const { 1: t } = o;
    return function () {
      m(o, k, t + 1);
    };
  }),
  k = c(
    1,
    (o, t) => {
      a(o[0], t), e(o[0], f(o));
    },
    i([s(0, a), s(0, e)]),
  );
u();
