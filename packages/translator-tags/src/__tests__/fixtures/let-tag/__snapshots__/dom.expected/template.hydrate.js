// size: 321 (min) 206 (brotli)

import {
  register as o,
  on as r,
  queueSource as t,
  value as m,
  data as c,
  intersection as n,
  queueEffect as i,
  init as s,
} from "@marko/runtime-tags/dom";
const a = o("/1NdQXTj", (o) =>
    r(
      o[0],
      "click",
      ((o) => {
        const { 3: r, 4: m } = o;
        return () => t(o, k, t(o, e, r + m));
      })(o),
    ),
  ),
  d = n(2, (o) => {
    i(o, a);
  }),
  e = m(4, (o, r) => c(o[2], r), d),
  k = m(3, (o, r) => c(o[1], r), d);
s();
