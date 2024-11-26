// size: 460 (min) 247 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const r = t.param(5, (a) => t.data(1, a)),
  o = t.effect("a0", ({ 4: a }, r) => t.on(r[0], "click", a)),
  i = t.param(4, (t) => o()),
  m = t.param(3, (t) => {
    i(t.onClick), r(t.text);
  });
t.param(2, (t) => m(t[0]));
const n = t.register("b0", (t) => {
    const { 1: a } = t;
    return function () {
      e(a + 1, t);
    };
  }),
  e = t.state(
    1,
    (t) => {
      r(t, 0), i(n(_scope), 0);
    },
    () => t.intersections([t.inChild(0, r), t.inChild(0, i)]),
  );
t.setup((t) => {
  e(0);
}),
  a();
