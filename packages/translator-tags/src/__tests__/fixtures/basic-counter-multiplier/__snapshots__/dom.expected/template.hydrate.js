// size: 460 (min) 242 (brotli)

import {
  register as n,
  on as t,
  queueSource as c,
  value as o,
  data as r,
  queueEffect as i,
  intersection as u,
  init as m,
} from "@marko/runtime-tags/dom";
const s = u(2, (n) => {
    const { 4: t, 5: c } = n;
    f(n, t * c);
  }),
  f = o(6, (n, t) => r(n[3], t)),
  k = n("YkI96C1n", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 5: t } = n;
        return function () {
          c(n, e, t + 1);
        };
      })(n),
    ),
  ),
  e = o(
    5,
    (n, t) => {
      r(n[1], t), i(n, k);
    },
    s,
  ),
  a = n("8Jf4uA2H", (n) =>
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
  l = o(4, (n, t) => i(n, a), s);
m();
