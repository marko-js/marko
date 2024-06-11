// size: 383 (min) 217 (brotli)

import {
  register as o,
  on as t,
  value as n,
  queueEffect as c,
  data as r,
  queueSource as m,
  intersections as i,
  inChild as s,
  init as a,
} from "@marko/runtime-tags/dom";
const u = o("a0", (o) => {
    const { 5: n } = o;
    t(o[0], "click", n);
  }),
  e = n(5, (o, t) => c(o, u)),
  f = n(4, (o, t) => r(o[1], t)),
  k = o("b0", (o) => {
    const { 1: t } = o;
    return function () {
      m(o, b, t + 1);
    };
  }),
  b = n(
    1,
    (o, t) => {
      f(o[0], t), e(o[0], k(o));
    },
    i([s(0, f), s(0, e)]),
  );
a();
