// size: 296 (min) 188 (brotli)

import {
  register as o,
  createRenderer as n,
  on as t,
  state as r,
  queueEffect as c,
  conditional as l,
  init as m,
} from "@marko/runtime-tags/dom";
const a = o("a0", n("Hello!", "")),
  i = l(0),
  u = o("a1", (o) =>
    t(
      o[1],
      "click",
      ((o) => {
        const { 2: n } = o;
        return function () {
          e(o, !n);
        };
      })(o),
    ),
  ),
  e = r(2, (o, n) => {
    c(o, u), i(o, n ? a : null);
  });
m();
