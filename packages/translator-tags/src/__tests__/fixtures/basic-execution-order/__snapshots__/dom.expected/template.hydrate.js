// size: 405 (min) 239 (brotli)

import {
  registerRenderer as l,
  createRenderer as n,
  value as o,
  inConditionalScope as t,
  register as i,
  on as m,
  closure as u,
  data as a,
  queueSource as c,
  conditional as r,
  init as d,
} from "@marko/runtime-tags/dom";
const e = u(2, (l, n) => a(l[0], n.text)),
  f = l("a0", n(" ", " ", void 0, [e])),
  k = r(1),
  s = o(3, (l, n) => k(l, n ? f : null), k),
  g = o(2, null, t(e, 1));
i("a1", (l) =>
  m(
    l[0],
    "click",
    ((l) =>
      function () {
        c(l, g, null), c(l, s, !1);
      })(l),
  ),
),
  d();
