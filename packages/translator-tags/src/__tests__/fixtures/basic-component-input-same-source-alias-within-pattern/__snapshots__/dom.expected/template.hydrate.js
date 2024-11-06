// size: 539 (min) 265 (brotli)

import {
  register as t,
  on as n,
  value as o,
  data as c,
  queueEffect as r,
  state as e,
  intersections as i,
  inChild as m,
  init as s,
} from "@marko/runtime-tags/dom";
const u = o(7, (t, n) => {
    c(t[1], n),
      ((t, n) => {
        c(t[2], n);
      })(t, n);
  }),
  a = o(6, (t, n) => u(t, n.text)),
  f = t("a0", (t) => {
    const { 5: o } = t;
    n(t[0], "click", o);
  }),
  b = o(5, (t, n) => r(t, f)),
  k = t("b0", (t) => {
    const { 2: n } = t;
    return function () {
      d(t, n + 1);
    };
  }),
  x = t("b1", (t) => {
    const { 2: n } = t;
    return function () {
      d(t, n + 1);
    };
  }),
  d = e(
    2,
    (t, n) => {
      a(t[0], { text: n }), b(t[0], k(t)), u(t[1], n), b(t[1], x(t));
    },
    () => i([m(0, a), m(0, b), m(1, u), m(1, b)]),
  );
s();
