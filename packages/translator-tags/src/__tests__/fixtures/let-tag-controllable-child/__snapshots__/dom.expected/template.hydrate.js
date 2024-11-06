// size: 818 (min) 326 (brotli)

import * as a from "@marko/runtime-tags/dom";
import { init as t } from "@marko/runtime-tags/dom";
const e = a.effect("a0", (t) =>
    a.on(
      t[3],
      "click",
      ((a) => {
        const { 10: t, 11: e } = a;
        return function () {
          i(a, e + 1, t);
        };
      })(t),
    ),
  ),
  n = a.intersection(2, (a) => {
    e(a);
  }),
  u = a.effect("a1", (t) =>
    a.on(
      t[0],
      "click",
      ((a) => {
        const { 8: t, 9: e } = a;
        return function () {
          r(a, e + 1, t);
        };
      })(t),
    ),
  ),
  o = a.intersection(2, (a) => {
    u(a);
  }),
  i = a.state(
    11,
    (t, e) => a.data(t[5], e),
    () => n,
  ),
  l = a.value(10, null, () => n),
  r = a.state(
    9,
    (t, e) => a.data(t[2], e),
    () => o,
  ),
  c = a.value(8, null, () => o),
  s = a.value(
    7,
    (t, e) => {
      a.data(t[1], e.value),
        a.data(t[4], e.value),
        c(t, e.valueChange),
        r(t, e.value, t[8]),
        l(t, e.valueChange),
        i(t, e.value, t[10]);
    },
    () => a.intersections([c, r, l, i]),
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
