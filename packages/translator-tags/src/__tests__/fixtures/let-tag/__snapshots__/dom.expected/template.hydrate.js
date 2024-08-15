// size: 315 (min) 201 (brotli)

import {
  register as o,
  on as r,
  queueSource as t,
  value as m,
  data as c,
  intersection as n,
  queueEffect as a,
  init as i,
} from "@marko/runtime-tags/dom";
const s = o("a0", (o) =>
    r(
      o[0],
      "click",
      ((o) => {
        const { 3: r, 4: m } = o;
        return () => t(o, u, t(o, k, r + m));
      })(o),
    ),
  ),
  e = n(2, (o) => {
    a(o, s);
  }),
  k = m(4, (o, r) => c(o[2], r), e),
  u = m(3, (o, r) => c(o[1], r), e);
i();
