// size: 274 (min) 181 (brotli)

import {
  register as o,
  queueSource as a,
  getAbortSignal as r,
  value as t,
  data as m,
  init as e,
} from "@marko/runtime-tags/dom";
const n = t(5, (o, a) => m(o[1], a)),
  s = t(4, (o, a) => m(o[0], a));
o("a2", (o) => {
  const { 3: t } = o;
  a(o, s, t.value + 1),
    (r(o, 0).onabort = (
      (o) => () =>
        a(o, n, previousValue)
    )(o));
}),
  e();
