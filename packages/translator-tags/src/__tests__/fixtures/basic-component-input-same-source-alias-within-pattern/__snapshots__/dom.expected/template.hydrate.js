// size: 584 (min) 265 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as i } from "@marko/runtime-tags/dom";
const n = t.value(7, (i, n) => {
    t.data(i[1], n),
      ((i, n) => {
        t.data(i[2], n);
      })(i, n);
  }),
  e = t.value(6, (t, i) => n(t, i.text)),
  r = t.effect("a0", (i) => {
    const { 5: n } = i;
    t.on(i[0], "click", n);
  }),
  o = t.value(5, (t, i) => r(t)),
  a = t.register("b0", (t) => {
    const { 2: i } = t;
    return function () {
      c(t, i + 1);
    };
  }),
  s = t.register("b1", (t) => {
    const { 2: i } = t;
    return function () {
      c(t, i + 1);
    };
  }),
  c = t.state(
    2,
    (t, i) => {
      e(t[0], { text: i }), o(t[0], a(t)), n(t[1], i), o(t[1], s(t));
    },
    () =>
      t.intersections([
        t.inChild(0, e),
        t.inChild(0, o),
        t.inChild(1, n),
        t.inChild(1, o),
      ]),
  );
i();
