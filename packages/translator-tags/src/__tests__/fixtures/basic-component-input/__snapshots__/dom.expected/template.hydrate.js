// size: 395 (min) 236 (brotli)

import {
  register as o,
  on as t,
  value as n,
  data as r,
  queueEffect as c,
  queueSource as m,
  intersections as i,
  inChild as s,
  init as u,
} from "@marko/runtime-tags/dom";
const a = n(5, (o, t) => r(o[1], t)),
  e = o("BoAUKp/g", (o) => {
    const { 4: n } = o;
    t(o[0], "click", n);
  }),
  f = n(4, (o, t) => c(o, e)),
  g = o("rUv1tZnP", (o) => {
    const { 1: t } = o;
    return function () {
      m(o, k, t + 1);
    };
  }),
  k = n(
    1,
    (o, t) => {
      a(o[0], t), f(o[0], g(o));
    },
    i([s(0, a), s(0, f)]),
  );
u();
