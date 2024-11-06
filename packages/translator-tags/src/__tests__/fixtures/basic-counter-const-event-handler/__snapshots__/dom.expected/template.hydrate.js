// size: 300 (min) 182 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const r = t.register("a0", (t) => {
    const { 2: o } = t;
    return function () {
      e(t, o + 1);
    };
  }),
  a = t.effect("a1", (o) => {
    const { 3: r } = o;
    t.on(o[0], "click", r);
  }),
  m = t.value(3, (t, o) => a(t)),
  e = t.state(2, (o, a) => {
    t.data(o[1], a), m(o, r(o));
  });
o();
