// size: 383 (min) 220 (brotli)

import {
  register as o,
  on as t,
  value as n,
  data as c,
  queueEffect as r,
  queueSource as m,
  intersections as i,
  inChild as s,
  init as a,
} from "@marko/runtime-tags/dom";
const u = n(5, (o, t) => c(o[1], t)),
  e = o("a0", (o) => {
    const { 4: n } = o;
    t(o[0], "click", n);
  }),
  f = n(4, (o, t) => r(o, e)),
  k = o("b0", (o) => {
    const { 1: t } = o;
    return function () {
      m(o, b, t + 1);
    };
  }),
  b = n(
    1,
    (o, t) => {
      u(o[0], t), f(o[0], k(o));
    },
    i([s(0, u), s(0, f)]),
  );
a();
