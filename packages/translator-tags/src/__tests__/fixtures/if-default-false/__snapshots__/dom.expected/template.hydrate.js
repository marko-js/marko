// size: 323 (min) 207 (brotli)

import {
  register as n,
  createRenderer as o,
  on as t,
  queueSource as r,
  value as c,
  queueEffect as i,
  conditional as m,
  init as u,
} from "@marko/runtime-tags/dom";
const d = n("kR+CLxdB", o("hi", "")),
  e = m(1),
  k = n("JZd50+ew", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          r(n, l, !o);
        };
      })(n),
    ),
  ),
  l = c(2, (n, o) => {
    i(n, k), e(n, o ? d : null);
  });
u();
