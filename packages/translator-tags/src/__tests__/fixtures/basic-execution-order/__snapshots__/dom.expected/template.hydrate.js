// size: 417 (min) 268 (brotli)

import {
  registerRenderer as l,
  createRenderer as n,
  value as o,
  inConditionalScope as t,
  register as u,
  on as i,
  closure as m,
  data as c,
  queueSource as r,
  conditional as d,
  init as f,
} from "@marko/runtime-tags/dom";
const k = m(2, (l, n) => c(l[0], n.text)),
  a = l("VDuKd/Xl", n(" ", " ", void 0, [k])),
  e = d(1),
  j = o(3, (l, n) => e(l, n ? a : null), e),
  s = o(2, null, t(k, 1));
u("fq0jHjAk", (l) =>
  i(
    l[0],
    "click",
    ((l) =>
      function () {
        r(l, s, null), r(l, j, !1);
      })(l),
  ),
),
  f();
