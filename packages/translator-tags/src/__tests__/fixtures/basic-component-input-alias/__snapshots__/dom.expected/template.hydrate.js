// size: 374 (min) 224 (brotli)

import {
  effect as o,
  on as t,
  value as n,
  data as c,
  register as r,
  state as m,
  intersections as i,
  inChild as s,
  init as a,
} from "@marko/runtime-tags/dom";
const u = o("a0", (o) => {
    const { 5: n } = o;
    t(o[0], "click", n);
  }),
  e = n(5, (o, t) => u(o)),
  f = n(4, (o, t) => c(o[1], t)),
  k = r("b0", (o) => {
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
