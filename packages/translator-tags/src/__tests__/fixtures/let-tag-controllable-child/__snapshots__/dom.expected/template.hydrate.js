// size: 810 (min) 371 (brotli)

import {
  register as n,
  on as u,
  initValue as a,
  value as e,
  data as l,
  intersections as t,
  queueControllableSource as c,
  intersection as o,
  queueEffect as r,
  queueSource as v,
  inChild as i,
  init as m,
} from "@marko/runtime-tags/dom";
const f = n("a0", (n) =>
    u(
      n[3],
      "click",
      ((n) => {
        const { 10: u, 11: a } = n;
        return function () {
          c(n, k, u, a + 1);
        };
      })(n),
    ),
  ),
  g = o(2, (n) => {
    r(n, f);
  }),
  s = n("a1", (n) =>
    u(
      n[0],
      "click",
      ((n) => {
        const { 8: u, 9: a } = n;
        return function () {
          c(n, b, u, a + 1);
        };
      })(n),
    ),
  ),
  h = o(2, (n) => {
    r(n, s);
  }),
  k = e(11, (n, u) => l(n[5], u), g),
  C = e(10, null, g),
  b = e(9, (n, u) => l(n[2], u), h),
  d = e(8, null, h),
  p = a(9, b),
  j = a(11, k),
  q = e(
    7,
    (n, u) => {
      l(n[1], u.value),
        l(n[4], u.value),
        d(n, u.valueChange),
        (n[8] ? b : p)(n, u.value),
        C(n, u.valueChange),
        (n[10] ? k : j)(n, u.value);
    },
    t([d, b, C, k]),
  ),
  w = n(
    "b0",
    (n) =>
      function (u) {
        v(n, x, u);
      },
  ),
  x = e(
    2,
    (n, u) => {
      l(n[1], u), q(n[0], { value: u, valueChange: w(n) });
    },
    i(0, q),
  );
m();
