// size: 336 (min) 214 (brotli)

import {
  register as n,
  createRenderer as o,
  effect as a,
  on as t,
  data as r,
  state as c,
  conditional as l,
  init as m,
} from "@marko/runtime-tags/dom";
const s = n(
    "a0",
    o("<span> </span>", "D ", (n) => {
      r(n[0], n.$global.x);
    }),
  ),
  i = l(0),
  u = a("a1", (n) =>
    t(
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
  p = c(2, (n, o) => {
    u(n), i(n, o ? s : null);
  });
m();
