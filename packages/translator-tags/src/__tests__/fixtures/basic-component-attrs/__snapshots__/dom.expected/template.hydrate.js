// size: 395 (min) 233 (brotli)

import {
  register as o,
  on as t,
  value as n,
  data as c,
  queueEffect as r,
  queueSource as m,
  intersections as s,
  inChild as i,
  init as f,
} from "@marko/runtime-tags/dom";
const u = n(5, (o, t) => c(o[1], t)),
  a = o("If4ooo9o", (o) => {
    const { 4: n } = o;
    t(o[0], "click", n);
  }),
  e = n(4, (o, t) => r(o, a)),
  k = o("+vsxXPHZ", (o) => {
    const { 1: t } = o;
    return function () {
      m(o, d, t + 1);
    };
  }),
  d = n(
    1,
    (o, t) => {
      u(o[0], t), e(o[0], k(o));
    },
    s([i(0, u), i(0, e)]),
  );
f();
