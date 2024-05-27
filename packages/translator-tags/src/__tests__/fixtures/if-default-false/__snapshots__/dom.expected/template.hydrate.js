// size: 309 (min) 191 (brotli)

import {
  register as n,
  createRenderer as o,
  on as t,
  queueSource as c,
  value as r,
  queueEffect as i,
  conditional as m,
  init as u,
} from "@marko/runtime-tags/dom";
const l = n("c", o("hi", "")),
  s = m(1),
  a = n("d", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          c(n, d, !o);
        };
      })(n),
    ),
  ),
  d = r(2, (n, o) => {
    i(n, a), s(n, o ? l : null);
  });
u();
