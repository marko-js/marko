// size: 280 (min) 189 (brotli)

import {
  register as o,
  queueSource as r,
  getAbortSignal as t,
  value as a,
  data as m,
  init as e,
} from "@marko/runtime-tags/dom";
const i = a(5, (o, r) => m(o[1], r)),
  n = a(4, (o, r) => m(o[0], r));
o("viMkqj2C", (o) => {
  const { 3: a } = o;
  r(o, n, a.value + 1),
    (t(o, 0).onabort = (
      (o) => () =>
        r(o, i, previousValue)
    )(o));
}),
  e();
