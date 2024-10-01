// size: 417 (min) 244 (brotli)

import {
  registerRenderer as l,
  createRenderer as n,
  register as o,
  on as t,
  queueSource as i,
  closure as m,
  data as u,
  value as a,
  inConditionalScope as c,
  conditional as r,
  init as d,
} from "@marko/runtime-tags/dom";
const e = m(2, (l, n) => u(l[0], n.text)),
  f = l(
    "a0",
    n(" ", " ", void 0, () => [e]),
  ),
  k = r(1),
  s = a(
    3,
    (l, n) => k(l, n ? f : null),
    () => k,
  ),
  g = a(2, null, () => c(e, 1));
o("a1", (l) =>
  t(l[0], "click", function () {
    i(l, g, null), i(l, s, !1);
  }),
),
  d();
