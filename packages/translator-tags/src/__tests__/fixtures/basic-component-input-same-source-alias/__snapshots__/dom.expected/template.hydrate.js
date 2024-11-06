// size: 423 (min) 225 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const a = t.value(6, (o, a) => {
    t.data(o[1], a),
      ((o, a) => {
        t.data(o[2], a);
      })(o, a);
  }),
  i = t.effect("a0", (o) => {
    const { 5: a } = o;
    t.on(o[0], "click", a);
  }),
  n = t.value(5, (t, o) => i(t)),
  r = t.register("b0", (t) => {
    const { 1: o } = t;
    return function () {
      e(t, o + 1);
    };
  }),
  e = t.state(
    1,
    (t, o) => {
      a(t[0], o), n(t[0], r(t));
    },
    () => t.intersections([t.inChild(0, a), t.inChild(0, n)]),
  );
o();
