// size: 273 (min) 181 (brotli)

import {
  register as o,
  queueSource as r,
  getAbortSignal as t,
  value as a,
  data as m,
  init as e,
} from "@marko/runtime-tags/dom";
const n = a(5, (o, r) => m(o[1], r)),
  s = a(4, (o, r) => m(o[0], r));
o("d", (o) => {
  const { 3: a } = o;
  r(o, s, a.value + 1),
    (t(o, 0).onabort = (
      (o) => () =>
        r(o, n, previousValue)
    )(o));
}),
  e();
