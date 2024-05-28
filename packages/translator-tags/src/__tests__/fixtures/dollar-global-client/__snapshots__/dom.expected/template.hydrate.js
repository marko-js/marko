// size: 360 (min) 225 (brotli)

import {
  register as n,
  createRenderer as o,
  on as t,
  data as c,
  queueSource as r,
  value as a,
  queueEffect as l,
  conditional as m,
  init as s,
} from "@marko/runtime-tags/dom";
const i = n(
    "c",
    o("<span> </span>", "D ", (n) => {
      c(n[0], n.$global.x);
    }),
  ),
  u = m(0),
  p = n("d", (n) =>
    t(
      n[1],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          r(n, d, !o);
        };
      })(n),
    ),
  ),
  d = a(2, (n, o) => {
    l(n, p), u(n, o ? i : null);
  });
s();
