// size: 343 (min) 215 (brotli)

import {
  register as n,
  createRenderer as o,
  on as a,
  data as t,
  state as r,
  queueEffect as c,
  conditional as l,
  init as m,
} from "@marko/runtime-tags/dom";
const s = n(
    "a0",
    o("<span> </span>", "D ", (n) => {
      t(n[0], n.$global.x);
    }),
  ),
  i = l(0),
  u = n("a1", (n) =>
    a(
      n[1],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          p(n, !o);
        };
      })(n),
    ),
  ),
  p = r(2, (n, o) => {
    c(n, u), i(n, o ? s : null);
  });
m();
