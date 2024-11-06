// size: 390 (min) 220 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const i = t.effect("a0", (o) => {
    const { 5: i } = o;
    t.on(o[0], "click", i);
  }),
  n = t.value(5, (t, o) => i(t)),
  r = t.value(4, (o, i) => t.data(o[1], i)),
  e = t.register("b0", (t) => {
    const { 1: o } = t;
    return function () {
      a(t, o + 1);
    };
  }),
  a = t.state(
    1,
    (t, o) => {
      r(t[0], o), n(t[0], e(t));
    },
    () => t.intersections([t.inChild(0, r), t.inChild(0, n)]),
  );
o();
