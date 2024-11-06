// size: 289 (min) 192 (brotli)

import {
  register as o,
  createRenderer as n,
  effect as t,
  on as r,
  state as c,
  conditional as l,
  init as m,
} from "@marko/runtime-tags/dom";
const a = o("a0", n("Hello!", "")),
  i = l(0),
  u = t("a1", (o) =>
    r(
      o[1],
      "click",
      ((o) => {
        const { 2: n } = o;
        return function () {
          e(o, !n);
        };
      })(o),
    ),
  ),
  e = c(2, (o, n) => {
    u(o), i(o, n ? a : null);
  });
m();
