// size: 427 (min) 220 (brotli)

import {
  effect as n,
  on as t,
  state as c,
  data as o,
  intersection as r,
  value as i,
  init as m,
} from "@marko/runtime-tags/dom";
const s = r(2, (n) => {
    const { 4: t, 5: c } = n;
    u(n, t * c);
  }),
  u = i(6, (n, t) => o(n[3], t)),
  a = n("a0", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 5: t } = n;
        return function () {
          e(n, t + 1);
        };
      })(n),
    ),
  ),
  e = c(
    5,
    (n, t) => {
      o(n[1], t), a(n);
    },
    () => s,
  ),
  f = n("a1", (n) =>
    t(
      n[2],
      "click",
      ((n) => {
        const { 4: t } = n;
        return function () {
          k(n, t + 1);
        };
      })(n),
    ),
  ),
  k = c(
    4,
    (n, t) => f(n),
    () => s,
  );
m();
