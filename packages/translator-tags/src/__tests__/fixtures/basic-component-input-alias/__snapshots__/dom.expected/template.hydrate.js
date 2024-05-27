// size: 381 (min) 222 (brotli)

import {
  register as o,
  on as t,
  value as c,
  queueEffect as n,
  data as r,
  queueSource as m,
  intersections as i,
  inChild as s,
  init as u,
} from "@marko/runtime-tags/dom";
const a = o("d", (o) => {
    const { 5: c } = o;
    t(o[0], "click", c);
  }),
  d = c(5, (o, t) => n(o, a)),
  e = c(4, (o, t) => r(o[1], t)),
  f = o("c", (o) => {
    const { 1: t } = o;
    return function () {
      m(o, k, t + 1);
    };
  }),
  k = c(
    1,
    (o, t) => {
      e(o[0], t), d(o[0], f(o));
    },
    i([s(0, e), s(0, d)]),
  );
u();
