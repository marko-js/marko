// size: 208 (min) 145 (brotli)

import {
  effect as o,
  on as r,
  state as t,
  data as m,
  init as c,
} from "@marko/runtime-tags/dom";
const n = o("a0", (o) =>
    r(
      o[0],
      "click",
      ((o) => {
        const { 6: r } = o;
        return () => (a(o, r + 1), r);
      })(o),
    ),
  ),
  a = t(6, (o, r) => {
    m(o[2], r), n(o);
  });
c();
