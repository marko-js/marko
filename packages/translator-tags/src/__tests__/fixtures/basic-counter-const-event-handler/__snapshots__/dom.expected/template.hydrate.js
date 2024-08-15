// size: 303 (min) 184 (brotli)

import {
  register as o,
  queueSource as t,
  on as n,
  value as c,
  data as r,
  queueEffect as m,
  init as a,
} from "@marko/runtime-tags/dom";
const i = o("a0", (o) => {
    const { 2: n } = o;
    return function () {
      t(o, e, n + 1);
    };
  }),
  s = o("a1", (o) => {
    const { 3: t } = o;
    n(o[0], "click", t);
  }),
  u = c(3, (o, t) => m(o, s)),
  e = c(2, (o, t) => {
    r(o[1], t), u(o, i(o));
  });
a();
