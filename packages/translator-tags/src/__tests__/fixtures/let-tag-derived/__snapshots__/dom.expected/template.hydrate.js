// size: 269 (min) 178 (brotli)

import {
  register as o,
  on as r,
  initValue as t,
  queueSource as c,
  value as m,
  data as n,
  queueEffect as i,
  init as s,
} from "@marko/runtime-tags/dom";
const a = o("c", (o) =>
    r(
      o[0],
      "click",
      ((o) => {
        const { 6: r } = o;
        return () => (c(o, e, r + 1), r);
      })(o),
    ),
  ),
  e = m(6, (o, r) => {
    n(o[2], r), i(o, a);
  });
t(6, e), s();
