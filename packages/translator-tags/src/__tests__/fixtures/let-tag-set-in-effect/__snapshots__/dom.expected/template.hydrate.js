// size: 214 (min) 147 (brotli)

import {
  register as o,
  state as m,
  data as t,
  queueEffect as r,
  init as a,
} from "@marko/runtime-tags/dom";
const n = m(3, (o, m) => t(o[1], m)),
  s = o("a0", (o) => {
    const { 2: m } = o;
    n(o, m), c(o, 2);
  }),
  c = m(2, (o, m) => {
    t(o[0], m), r(o, s);
  });
a();
