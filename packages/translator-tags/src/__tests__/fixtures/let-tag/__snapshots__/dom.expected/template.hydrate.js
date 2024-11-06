// size: 306 (min) 196 (brotli)

import {
  register as o,
  on as r,
  state as t,
  data as m,
  intersection as c,
  queueEffect as n,
  init as a,
} from "@marko/runtime-tags/dom";
const i = o("a0", (o) =>
    r(
      o[0],
      "click",
      ((o) => {
        const { 3: r, 4: t } = o;
        return () => k(o, e(o, r + t));
      })(o),
    ),
  ),
  s = c(2, (o) => {
    n(o, i);
  }),
  e = t(
    4,
    (o, r) => m(o[2], r),
    () => s,
  ),
  k = t(
    3,
    (o, r) => m(o[1], r),
    () => s,
  );
a();
