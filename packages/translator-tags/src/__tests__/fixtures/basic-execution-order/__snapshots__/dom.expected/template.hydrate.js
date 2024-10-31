// size: 395 (min) 234 (brotli)

import {
  register as l,
  createRenderer as n,
  on as o,
  queueSource as t,
  closure as i,
  data as m,
  value as u,
  inConditionalScope as a,
  conditional as c,
  init as r,
} from "@marko/runtime-tags/dom";
const d = i(2, (l, n) => m(l[0], n.text)),
  e = l(
    "a0",
    n(" ", " ", void 0, () => [d]),
  ),
  f = c(1),
  k = u(
    3,
    (l, n) => f(l, n ? e : null),
    () => f,
  ),
  s = u(2, null, () => a(d, 1));
l("a1", (l) =>
  o(l[0], "click", function () {
    t(l, s, null), t(l, k, !1);
  }),
),
  r();
