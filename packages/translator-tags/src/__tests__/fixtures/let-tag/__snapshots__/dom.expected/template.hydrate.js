// size: 314 (min) 199 (brotli)

import {
  register as o,
  on as r,
  queueSource as t,
  value as c,
  data as m,
  intersection as n,
  queueEffect as i,
  init as s,
} from "@marko/runtime-tags/dom";
const a = o("c", (o) =>
    r(
      o[0],
      "click",
      ((o) => {
        const { 3: r, 4: c } = o;
        return () => t(o, u, t(o, k, r + c));
      })(o),
    ),
  ),
  e = n(2, (o) => {
    i(o, a);
  }),
  k = c(4, (o, r) => m(o[2], r), e),
  u = c(3, (o, r) => m(o[1], r), e);
s();
