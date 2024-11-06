// size: 376 (min) 209 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
function r(t) {
  return { a: t };
}
t.register("a0", r);
const o = t.value(5, (a, r) => {
    t.data(a[1], r),
      ((a, r) => {
        t.data(a[2], r);
      })(a, r);
  }),
  e = t.value(4, (t, a) => o(t, a.a)),
  n = t.effect("a1", (a) =>
    t.on(
      a[0],
      "click",
      ((t) => {
        const { 3: a } = t;
        return function () {
          m(t, a + 1);
        };
      })(a),
    ),
  ),
  m = t.state(3, (t, a) => {
    n(t), e(t, r(a));
  });
a();
