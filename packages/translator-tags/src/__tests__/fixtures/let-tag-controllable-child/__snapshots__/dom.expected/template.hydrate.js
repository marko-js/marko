// size: 846 (min) 383 (brotli)

import {
  register as n,
  on as u,
  initValue as a,
  queueControllableSource as e,
  value as l,
  data as t,
  intersections as c,
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
          e(n, k, u, a + 1);
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
          e(n, b, u, a + 1);
        };
      })(n),
    ),
  ),
  h = o(2, (n) => {
    r(n, s);
  }),
  k = l(
    11,
    (n, u) => t(n[5], u),
    () => g,
  ),
  C = l(10, null, () => g),
  b = l(
    9,
    (n, u) => t(n[2], u),
    () => h,
  ),
  d = l(8, null, () => h),
  p = a(9, b),
  j = a(11, k),
  q = l(
    7,
    (n, u) => {
      t(n[1], u.value),
        t(n[4], u.value),
        d(n, u.valueChange),
        (n[8] ? b : p)(n, u.value),
        C(n, u.valueChange),
        (n[10] ? k : j)(n, u.value);
    },
    () => c([d, b, C, k]),
  ),
  w = n(
    "b0",
    (n) =>
      function (u) {
        v(n, x, u);
      },
  ),
  x = l(
    2,
    (n, u) => {
      t(n[1], u), q(n[0], { value: u, valueChange: w(n) });
    },
    () => i(0, q),
  );
m();
