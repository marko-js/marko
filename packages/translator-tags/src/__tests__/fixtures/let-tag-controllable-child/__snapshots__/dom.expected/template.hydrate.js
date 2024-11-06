// size: 812 (min) 325 (brotli)

import * as a from "@marko/runtime-tags/dom";
import { init as t } from "@marko/runtime-tags/dom";
const e = a.effect("a0", (t) =>
    a.on(
      t[3],
      "click",
      ((a) => {
        const { 10: t, 11: e } = a;
        return function () {
          u(a, e + 1, t);
        };
      })(t),
    ),
  ),
  n = a.intersection(2, (a) => {
    e(a);
  }),
  o = a.effect("a1", (t) =>
    a.on(
      t[0],
      "click",
      ((a) => {
        const { 8: t, 9: e } = a;
        return function () {
          c(a, e + 1, t);
        };
      })(t),
    ),
  ),
  i = a.intersection(2, (a) => {
    o(a);
  }),
  u = a.state(
    11,
    (t, e) => a.data(t[5], e),
    () => n,
  ),
  r = a.value(10, 0, () => n),
  c = a.state(
    9,
    (t, e) => a.data(t[2], e),
    () => i,
  ),
  l = a.value(8, 0, () => i),
  s = a.value(
    7,
    (t, e) => {
      a.data(t[1], e.value),
        a.data(t[4], e.value),
        l(t, e.valueChange),
        c(t, e.value, t[8]),
        r(t, e.valueChange),
        u(t, e.value, t[10]);
    },
    () => a.intersections([l, c, r, u]),
  ),
  v = a.register(
    "b0",
    (a) =>
      function (t) {
        m(a, t);
      },
  ),
  m = a.state(
    2,
    (t, e) => {
      a.data(t[1], e), s(t[0], { value: e, valueChange: v(t) });
    },
    () => a.inChild(0, s),
  );
t();
