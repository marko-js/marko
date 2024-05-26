// size: 458 (min) 262 (brotli)

import {
  register as t,
  on as n,
  value as o,
  queueEffect as c,
  data as r,
  queueSource as e,
  intersections as i,
  inChild as m,
  init as s,
} from "@marko/runtime-tags/dom";
const u = o(7, (t, n) => {
    r(t[1], n),
      ((t, n) => {
        r(t[2], n);
      })(t, n);
  }),
  d = o(6, (t, n) => u(t, n.text)),
  a = t("GinqTe+q", (t) => {
    const { 5: o } = t;
    n(t[0], "click", o);
  }),
  f = o(5, (t, n) => c(t, a)),
  k = t("O2ud1l4d", (t) => {
    const { 1: n } = t;
    return function () {
      e(t, l, n + 1);
    };
  }),
  l = o(
    1,
    (t, n) => {
      d(t[0], { text: n }), f(t[0], k(t));
    },
    i([m(0, d), m(0, f)]),
  );
s();
