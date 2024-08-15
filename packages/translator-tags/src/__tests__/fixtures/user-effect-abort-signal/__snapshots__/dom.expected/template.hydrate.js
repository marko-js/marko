// size: 264 (min) 177 (brotli)

import {
  register as o,
  queueSource as t,
  getAbortSignal as a,
  value as m,
  data as n,
  init as r,
} from "@marko/runtime-tags/dom";
const s = m(5, (o, t) => n(o[1], t)),
  c = m(4, (o, t) => n(o[0], t));
o("a0", (o) => {
  const { 3: m } = o;
  {
    const n = t(o, c, m.value + 1);
    a(o, 0).onabort = () => t(o, s, n);
  }
}),
  r();
