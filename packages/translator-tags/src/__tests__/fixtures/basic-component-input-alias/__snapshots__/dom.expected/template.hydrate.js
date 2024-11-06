// size: 381 (min) 223 (brotli)

import {
  register as o,
  on as t,
  value as n,
  queueEffect as c,
  data as r,
  state as m,
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
      b(o, t + 1);
    };
  }),
  b = m(
    1,
    (o, t) => {
      f(o[0], t), e(o[0], k(o));
    },
    () => i([s(0, f), s(0, e)]),
  );
a();
