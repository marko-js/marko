// size: 292 (min) 185 (brotli)

import {
  register as n,
  createRenderer as o,
  on as t,
  state as r,
  queueEffect as c,
  conditional as i,
  init as m,
} from "@marko/runtime-tags/dom";
const a = n("a0", o("hi", "")),
  u = i(1),
  l = n("a1", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          s(n, !o);
        };
      })(n),
    ),
  ),
  s = r(2, (n, o) => {
    c(n, l), u(n, o ? a : null);
  });
m();
