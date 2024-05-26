// size: 395 (min) 241 (brotli)

import {
  register as o,
  on as t,
  value as n,
  queueEffect as c,
  data as r,
  queueSource as m,
  intersections as i,
  inChild as s,
  init as u,
} from "@marko/runtime-tags/dom";
const E = o("qT869PIE", (o) => {
    const { 5: n } = o;
    t(o[0], "click", n);
  }),
  a = n(5, (o, t) => c(o, E)),
  e = n(4, (o, t) => r(o[1], t)),
  f = o("vb7E1SEX", (o) => {
    const { 1: t } = o;
    return function () {
      m(o, k, t + 1);
    };
  }),
  k = n(
    1,
    (o, t) => {
      e(o[0], t), a(o[0], f(o));
    },
    i([s(0, e), s(0, a)]),
  );
u();
