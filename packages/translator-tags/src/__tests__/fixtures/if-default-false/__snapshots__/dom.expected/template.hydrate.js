// size: 311 (min) 198 (brotli)

import {
  register as n,
  createRenderer as o,
  on as t,
  queueSource as r,
  value as c,
  queueEffect as i,
  conditional as m,
  init as a,
} from "@marko/runtime-tags/dom";
const u = n("a0", o("hi", "")),
  l = m(1),
  s = n("a1", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          r(n, e, !o);
        };
      })(n),
    ),
  ),
  e = c(2, (n, o) => {
    i(n, s), l(n, o ? u : null);
  });
a();
