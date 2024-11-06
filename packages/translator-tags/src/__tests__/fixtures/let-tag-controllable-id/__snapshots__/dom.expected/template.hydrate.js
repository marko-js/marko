// size: 354 (min) 215 (brotli)

import {
  register as n,
  effect as o,
  on as t,
  state as c,
  data as r,
  intersection as i,
  init as m,
} from "@marko/runtime-tags/dom";
n(
  "a0",
  (n) =>
    function (o) {
      s(n, o + 1);
    },
);
const a = o("a1", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 4: o, 5: t } = n;
        return function () {
          f(n, t + 1, o);
        };
      })(n),
    ),
  ),
  u = i(2, (n) => {
    a(n);
  }),
  f = c(
    5,
    (n, o) => r(n[2], o),
    () => u,
  ),
  s = c(
    3,
    (n, o) => {
      r(n[1], o), f(n, o, n[4]);
    },
    () => f,
  );
m();
