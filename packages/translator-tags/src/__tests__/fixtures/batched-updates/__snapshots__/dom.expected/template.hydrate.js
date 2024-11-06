// size: 299 (min) 176 (brotli)

import {
  effect as n,
  on as o,
  state as t,
  intersection as c,
  data as r,
  init as l,
} from "@marko/runtime-tags/dom";
const m = n("a0", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const { 2: o, 3: t } = n;
        return function () {
          s(n, o + 1), i(n, t + 1);
        };
      })(n),
    ),
  ),
  u = c(2, (n) => {
    const { 2: o, 3: t } = n;
    r(n[1], o + t), m(n);
  }),
  i = t(3, null, () => u),
  s = t(2, null, () => u);
l();
