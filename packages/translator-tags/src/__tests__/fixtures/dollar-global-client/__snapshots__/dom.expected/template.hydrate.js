// size: 362 (min) 222 (brotli)

import {
  register as n,
  createRenderer as o,
  on as a,
  data as t,
  queueSource as r,
  value as c,
  queueEffect as l,
  conditional as m,
  init as s,
} from "@marko/runtime-tags/dom";
const i = n(
    "a0",
    o("<span> </span>", "D ", (n) => {
      t(n[0], n.$global.x);
    }),
  ),
  u = m(0),
  p = n("a1", (n) =>
    a(
      n[1],
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
    l(n, p), u(n, o ? i : null);
  });
s();
