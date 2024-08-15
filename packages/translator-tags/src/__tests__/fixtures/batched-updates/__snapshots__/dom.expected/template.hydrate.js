// size: 329 (min) 201 (brotli)

import {
  register as n,
  on as o,
  queueSource as t,
  value as c,
  intersection as r,
  data as l,
  queueEffect as m,
  init as u,
} from "@marko/runtime-tags/dom";
const i = n("a0", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const { 2: o, 3: c } = n;
        return function () {
          t(n, e, o + 1), t(n, a, c + 1);
        };
      })(n),
    ),
  ),
  s = r(2, (n) => {
    const { 2: o, 3: t } = n;
    l(n[1], o + t), m(n, i);
  }),
  a = c(3, null, s),
  e = c(2, null, s);
u();
