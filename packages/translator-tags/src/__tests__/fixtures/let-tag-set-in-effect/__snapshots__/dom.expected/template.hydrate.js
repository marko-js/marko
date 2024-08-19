// size: 235 (min) 156 (brotli)

import {
  register as o,
  queueSource as m,
  value as t,
  data as r,
  queueEffect as a,
  init as n,
} from "@marko/runtime-tags/dom";
const s = t(3, (o, m) => r(o[1], m)),
  c = o("a0", (o) => {
    const { 2: t } = o;
    m(o, s, t), m(o, i, 2);
  }),
  i = t(2, (o, m) => {
    r(o[0], m), a(o, c);
  });
n();
