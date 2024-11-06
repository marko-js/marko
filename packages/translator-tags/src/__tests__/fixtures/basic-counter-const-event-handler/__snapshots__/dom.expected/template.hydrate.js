// size: 295 (min) 190 (brotli)

import {
  register as o,
  on as t,
  state as n,
  data as c,
  value as r,
  queueEffect as m,
  init as a,
} from "@marko/runtime-tags/dom";
const i = o("a0", (o) => {
    const { 2: t } = o;
    return function () {
      e(o, t + 1);
    };
  }),
  s = o("a1", (o) => {
    const { 3: n } = o;
    t(o[0], "click", n);
  }),
  u = r(3, (o, t) => m(o, s)),
  e = n(2, (o, t) => {
    c(o[1], t), u(o, i(o));
  });
a();
