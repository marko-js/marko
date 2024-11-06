// size: 285 (min) 186 (brotli)

import {
  register as n,
  createRenderer as o,
  effect as t,
  on as r,
  state as c,
  conditional as i,
  init as m,
} from "@marko/runtime-tags/dom";
const a = n("a0", o("hi", "")),
  u = i(1),
  l = t("a1", (n) =>
    r(
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
  s = c(2, (n, o) => {
    l(n), u(n, o ? a : null);
  });
m();
