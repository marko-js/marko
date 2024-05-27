// size: 446 (min) 225 (brotli)

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
    e(n, t * c);
  }),
  e = o(6, (n, t) => r(n[3], t)),
  f = n("d", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 5: t } = n;
        return function () {
          c(n, k, t + 1);
        };
      })(n),
    ),
  ),
  k = o(
    5,
    (n, t) => {
      r(n[1], t), i(n, f);
    },
    u,
  ),
  a = n("e", (n) =>
    t(
      n[2],
      "click",
      ((n) => {
        const { 4: t } = n;
        return function () {
          c(n, d, t + 1);
        };
      })(n),
    ),
  ),
  d = o(4, (n, t) => i(n, a), u);
s();
