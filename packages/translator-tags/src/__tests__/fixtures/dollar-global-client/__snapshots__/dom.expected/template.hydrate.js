// size: 374 (min) 235 (brotli)

import {
  register as n,
  createRenderer as o,
  on as t,
  data as r,
  queueSource as u,
  value as a,
  queueEffect as c,
  conditional as l,
  init as m,
} from "@marko/runtime-tags/dom";
const s = n(
    "5PyeQGYq",
    o("<span> </span>", "D ", (n) => {
      r(n[0], n.$global.x);
    }),
  ),
  i = l(0),
  e = n("uOujnwKz", (n) =>
    t(
      n[1],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          u(n, p, !o);
        };
      })(n),
    ),
  ),
  p = a(2, (n, o) => {
    c(n, e), i(n, o ? s : null);
  });
m();
