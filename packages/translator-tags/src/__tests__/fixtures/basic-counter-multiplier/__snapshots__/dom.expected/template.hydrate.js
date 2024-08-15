// size: 448 (min) 227 (brotli)

import {
  register as n,
  on as t,
  queueSource as c,
  value as o,
  data as r,
  queueEffect as i,
  intersection as m,
  init as s,
} from "@marko/runtime-tags/dom";
const u = m(2, (n) => {
    const { 4: t, 5: c } = n;
    a(n, t * c);
  }),
  a = o(6, (n, t) => r(n[3], t)),
  e = n("a0", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 5: t } = n;
        return function () {
          c(n, f, t + 1);
        };
      })(n),
    ),
  ),
  f = o(
    5,
    (n, t) => {
      r(n[1], t), i(n, e);
    },
    u,
  ),
  k = n("a1", (n) =>
    t(
      n[2],
      "click",
      ((n) => {
        const { 4: t } = n;
        return function () {
          c(n, l, t + 1);
        };
      })(n),
    ),
  ),
  l = o(4, (n, t) => i(n, k), u);
s();
