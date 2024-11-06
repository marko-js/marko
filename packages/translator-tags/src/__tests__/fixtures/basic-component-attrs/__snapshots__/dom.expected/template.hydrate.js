// size: 390 (min) 219 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const i = t.value(5, (o, i) => t.data(o[1], i)),
  n = t.effect("a0", (o) => {
    const { 4: i } = o;
    t.on(o[0], "click", i);
  }),
  r = t.value(4, (t, o) => n(t)),
  e = t.register("b0", (t) => {
    const { 1: o } = t;
    return function () {
      a(t, o + 1);
    };
  }),
  a = t.state(
    1,
    (t, o) => {
      i(t[0], o), r(t[0], e(t));
    },
    () => t.intersections([t.inChild(0, i), t.inChild(0, r)]),
  );
o();
