// size: 452 (min) 248 (brotli)

import {
  register as t,
  on as o,
  value as n,
  queueEffect as c,
  data as r,
  queueSource as m,
  intersections as e,
  inChild as i,
  init as s,
} from "@marko/runtime-tags/dom";
const a = n(7, (t, o) => {
    r(t[1], o),
      ((t, o) => {
        r(t[2], o);
      })(t, o);
  }),
  u = n(6, (t, o) => a(t, o.text)),
  f = t("a0", (t) => {
    const { 5: n } = t;
    o(t[0], "click", n);
  }),
  k = n(5, (t, o) => c(t, f)),
  x = t("b0", (t) => {
    const { 1: o } = t;
    return function () {
      m(t, b, o + 1);
    };
  }),
  b = n(
    1,
    (t, o) => {
      u(t[0], { text: o }), k(t[0], x(t));
    },
    () => e([i(0, u), i(0, k)]),
  );
s();
