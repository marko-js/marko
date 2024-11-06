// size: 386 (min) 231 (brotli)

import {
  register as l,
  createRenderer as n,
  effect as o,
  on as t,
  closure as i,
  data as m,
  state as u,
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
o("a1", (l) =>
  t(l[0], "click", function () {
    s(l, null), k(l, !1);
  }),
),
  r();
