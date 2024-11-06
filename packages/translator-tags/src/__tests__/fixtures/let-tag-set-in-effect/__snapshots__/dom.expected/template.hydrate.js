// size: 193 (min) 141 (brotli)

import {
  effect as o,
  state as m,
  data as t,
  init as r,
} from "@marko/runtime-tags/dom";
const a = m(3, (o, m) => t(o[1], m)),
  n = o("a0", (o) => {
    const { 2: m } = o;
    a(o, m), s(o, 2);
  }),
  s = m(2, (o, m) => {
    t(o[0], m), n(o);
  });
r();
