// size: 320 (min) 192 (brotli)

import {
  register as n,
  on as o,
  state as t,
  intersection as c,
  data as r,
  queueEffect as l,
  init as m,
} from "@marko/runtime-tags/dom";
const u = n("a0", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const { 2: o, 3: t } = n;
        return function () {
          a(n, o + 1), s(n, t + 1);
        };
      })(n),
    ),
  ),
  i = c(2, (n) => {
    const { 2: o, 3: t } = n;
    r(n[1], o + t), l(n, u);
  }),
  s = t(3, null, () => i),
  a = t(2, null, () => i);
m();
