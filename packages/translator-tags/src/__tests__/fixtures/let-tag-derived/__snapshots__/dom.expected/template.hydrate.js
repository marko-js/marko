// size: 229 (min) 155 (brotli)

import {
  register as o,
  on as r,
  state as t,
  data as m,
  queueEffect as c,
  init as n,
} from "@marko/runtime-tags/dom";
const a = o("a0", (o) =>
    r(
      o[0],
      "click",
      ((o) => {
        const { 6: r } = o;
        return () => (i(o, r + 1), r);
      })(o),
    ),
  ),
  i = t(6, (o, r) => {
    m(o[2], r), c(o, a);
  });
n();
