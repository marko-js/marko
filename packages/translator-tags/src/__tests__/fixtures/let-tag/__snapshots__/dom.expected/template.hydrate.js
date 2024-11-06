// size: 285 (min) 183 (brotli)

import {
  effect as o,
  on as r,
  state as t,
  data as m,
  intersection as c,
  init as n,
} from "@marko/runtime-tags/dom";
const a = o("a0", (o) =>
    r(
      o[0],
      "click",
      ((o) => {
        const { 3: r, 4: t } = o;
        return () => e(o, s(o, r + t));
      })(o),
    ),
  ),
  i = c(2, (o) => {
    a(o);
  }),
  s = t(
    4,
    (o, r) => m(o[2], r),
    () => i,
  ),
  e = t(
    3,
    (o, r) => m(o[1], r),
    () => i,
  );
n();
