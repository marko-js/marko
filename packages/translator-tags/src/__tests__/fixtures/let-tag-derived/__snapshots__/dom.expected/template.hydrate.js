// size: 270 (min) 179 (brotli)

import {
  register as o,
  on as r,
  initValue as t,
  queueSource as m,
  value as c,
  data as n,
  queueEffect as a,
  init as i,
} from "@marko/runtime-tags/dom";
const s = o("a0", (o) =>
    r(
      o[0],
      "click",
      ((o) => {
        const { 6: r } = o;
        return () => (m(o, e, r + 1), r);
      })(o),
    ),
  ),
  e = c(6, (o, r) => {
    n(o[2], r), a(o, s);
  });
t(6, e), i();
