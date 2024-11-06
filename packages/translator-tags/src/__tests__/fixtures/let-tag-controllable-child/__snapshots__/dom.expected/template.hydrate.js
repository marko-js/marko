// size: 754 (min) 346 (brotli)

import {
  effect as n,
  on as u,
  state as a,
  data as e,
  value as l,
  intersections as t,
  intersection as c,
  register as o,
  inChild as r,
  init as v,
} from "@marko/runtime-tags/dom";
const i = n("a0", (n) =>
    u(
      n[3],
      "click",
      ((n) => {
        const { 10: u, 11: a } = n;
        return function () {
          s(n, a + 1, u);
        };
      })(n),
    ),
  ),
  m = c(2, (n) => {
    i(n);
  }),
  f = n("a1", (n) =>
    u(
      n[0],
      "click",
      ((n) => {
        const { 8: u, 9: a } = n;
        return function () {
          k(n, a + 1, u);
        };
      })(n),
    ),
  ),
  g = c(2, (n) => {
    f(n);
  }),
  s = a(
    11,
    (n, u) => e(n[5], u),
    () => m,
  ),
  h = l(10, null, () => m),
  k = a(
    9,
    (n, u) => e(n[2], u),
    () => g,
  ),
  C = l(8, null, () => g),
  b = l(
    7,
    (n, u) => {
      e(n[1], u.value),
        e(n[4], u.value),
        C(n, u.valueChange),
        k(n, u.value, n[8]),
        h(n, u.valueChange),
        s(n, u.value, n[10]);
    },
    () => t([C, k, h, s]),
  ),
  d = o(
    "b0",
    (n) =>
      function (u) {
        p(n, u);
      },
  ),
  p = a(
    2,
    (n, u) => {
      e(n[1], u), b(n[0], { value: u, valueChange: d(n) });
    },
    () => r(0, b),
  );
v();
