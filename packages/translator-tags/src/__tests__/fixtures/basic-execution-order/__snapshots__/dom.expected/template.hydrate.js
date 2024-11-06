// size: 374 (min) 223 (brotli)

import {
  register as l,
  createRenderer as n,
  on as o,
  closure as t,
  data as i,
  state as m,
  inConditionalScope as u,
  conditional as a,
  init as c,
} from "@marko/runtime-tags/dom";
const r = t(2, (l, n) => i(l[0], n.text)),
  d = l(
    "a0",
    n(" ", " ", void 0, () => [r]),
  ),
  e = a(1),
  f = m(
    3,
    (l, n) => e(l, n ? d : null),
    () => e,
  ),
  k = m(2, null, () => u(r, 1));
l("a1", (l) =>
  o(l[0], "click", function () {
    k(l, null), f(l, !1);
  }),
),
  c();
