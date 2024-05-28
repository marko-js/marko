// size: 403 (min) 242 (brotli)

import {
  registerRenderer as l,
  createRenderer as n,
  value as o,
  inConditionalScope as t,
  register as c,
  on as i,
  closure as m,
  data as u,
  queueSource as r,
  conditional as d,
  init as a,
} from "@marko/runtime-tags/dom";
const e = m(2, (l, n) => u(l[0], n.text)),
  f = l("c", n(" ", " ", void 0, [e])),
  k = d(1),
  s = o(3, (l, n) => k(l, n ? f : null), k),
  g = o(2, null, t(e, 1));
c("d", (l) =>
  i(
    l[0],
    "click",
    ((l) =>
      function () {
        r(l, g, null), r(l, s, !1);
      })(l),
  ),
),
  a();
