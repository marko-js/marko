// size: 315 (min) 199 (brotli)

import {
  register as o,
  createRenderer as n,
  on as t,
  queueSource as r,
  value as c,
  queueEffect as l,
  conditional as m,
  init as a,
} from "@marko/runtime-tags/dom";
const i = o("a0", n("Hello!", "")),
  u = m(0),
  e = o("a1", (o) =>
    t(
      o[1],
      "click",
      ((o) => {
        const { 2: n } = o;
        return function () {
          r(o, s, !n);
        };
      })(o),
    ),
  ),
  s = c(2, (o, n) => {
    l(o, e), u(o, n ? i : null);
  });
a();
