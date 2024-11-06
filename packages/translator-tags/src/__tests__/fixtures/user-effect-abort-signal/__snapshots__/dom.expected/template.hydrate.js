// size: 243 (min) 165 (brotli)

import {
  register as o,
  getAbortSignal as t,
  state as a,
  data as m,
  init as n,
} from "@marko/runtime-tags/dom";
const r = a(5, (o, t) => m(o[1], t)),
  s = a(4, (o, t) => m(o[0], t));
o("a0", (o) => {
  const { 3: a } = o;
  {
    const m = s(o, a.value + 1);
    t(o, 0).onabort = () => r(o, m);
  }
}),
  n();
