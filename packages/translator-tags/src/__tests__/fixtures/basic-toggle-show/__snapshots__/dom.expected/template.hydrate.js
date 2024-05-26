// size: 327 (min) 218 (brotli)

import {
  register as o,
  createRenderer as n,
  on as t,
  queueSource as m,
  value as r,
  queueEffect as c,
  conditional as l,
  init as i,
} from "@marko/runtime-tags/dom";
const u = o("WCqm520Q", n("Hello!", "")),
  e = l(0),
  s = o("F9gKwzqG", (o) =>
    t(
      o[1],
      "click",
      ((o) => {
        const { 2: n } = o;
        return function () {
          m(o, a, !n);
        };
      })(o),
    ),
  ),
  a = r(2, (o, n) => {
    c(o, s), e(o, n ? u : null);
  });
i();
