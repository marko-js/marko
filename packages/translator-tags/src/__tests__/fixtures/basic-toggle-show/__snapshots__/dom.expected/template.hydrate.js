// size: 313 (min) 192 (brotli)

import {
  register as o,
  createRenderer as n,
  on as t,
  queueSource as c,
  value as r,
  queueEffect as l,
  conditional as m,
  init as i,
} from "@marko/runtime-tags/dom";
const u = o("c", n("Hello!", "")),
  e = m(0),
  s = o("d", (o) =>
    t(
      o[1],
      "click",
      ((o) => {
        const { 2: n } = o;
        return function () {
          c(o, a, !n);
        };
      })(o),
    ),
  ),
  a = r(2, (o, n) => {
    l(o, s), e(o, n ? u : null);
  });
i();
