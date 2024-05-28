// size: 444 (min) 244 (brotli)

import {
  register as t,
  on as o,
  value as c,
  queueEffect as n,
  data as r,
  queueSource as m,
  intersections as e,
  inChild as i,
  init as s,
} from "@marko/runtime-tags/dom";
const u = c(7, (t, o) => {
    r(t[1], o),
      ((t, o) => {
        r(t[2], o);
      })(t, o);
  }),
  a = c(6, (t, o) => u(t, o.text)),
  d = t("d", (t) => {
    const { 5: c } = t;
    o(t[0], "click", c);
  }),
  f = c(5, (t, o) => n(t, d)),
  k = t("c", (t) => {
    const { 1: o } = t;
    return function () {
      m(t, x, o + 1);
    };
  }),
  x = c(
    1,
    (t, o) => {
      a(t[0], { text: o }), f(t[0], k(t));
    },
    e([i(0, a), i(0, f)]),
  );
s();
