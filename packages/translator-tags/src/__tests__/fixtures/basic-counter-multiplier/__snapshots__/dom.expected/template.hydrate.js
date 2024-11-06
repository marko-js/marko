// size: 450 (min) 227 (brotli)

import {
  register as n,
  on as t,
  state as c,
  data as o,
  queueEffect as r,
  intersection as i,
  value as m,
  init as s,
} from "@marko/runtime-tags/dom";
const u = i(2, (n) => {
    const { 4: t, 5: c } = n;
    a(n, t * c);
  }),
  a = m(6, (n, t) => o(n[3], t)),
  e = n("a0", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 5: t } = n;
        return function () {
          f(n, t + 1);
        };
      })(n),
    ),
  ),
  f = c(
    5,
    (n, t) => {
      o(n[1], t), r(n, e);
    },
    () => u,
  ),
  k = n("a1", (n) =>
    t(
      n[2],
      "click",
      ((n) => {
        const { 4: t } = n;
        return function () {
          l(n, t + 1);
        };
      })(n),
    ),
  ),
  l = c(
    4,
    (n, t) => r(n, k),
    () => u,
  );
s();
