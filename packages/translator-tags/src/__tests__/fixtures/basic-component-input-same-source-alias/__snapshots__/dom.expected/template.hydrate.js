// size: 423 (min) 245 (brotli)

import {
  register as t,
  on as o,
  value as c,
  data as n,
  queueEffect as r,
  queueSource as m,
  intersections as i,
  inChild as s,
  init as e,
} from "@marko/runtime-tags/dom";
const f = c(6, (t, o) => {
    n(t[1], o),
      ((t, o) => {
        n(t[2], o);
      })(t, o);
  }),
  u = t("Q1HZlr/f", (t) => {
    const { 5: c } = t;
    o(t[0], "click", c);
  }),
  a = c(5, (t, o) => r(t, u)),
  k = t("vTYeptVc", (t) => {
    const { 1: o } = t;
    return function () {
      m(t, l, o + 1);
    };
  }),
  l = c(
    1,
    (t, o) => {
      f(t[0], o), a(t[0], k(t));
    },
    i([s(0, f), s(0, a)]),
  );
e();
