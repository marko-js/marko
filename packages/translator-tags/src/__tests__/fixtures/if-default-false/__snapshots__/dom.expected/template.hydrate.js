// size: 299 (min) 185 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as r } from "@marko/runtime-tags/dom";
const o = t.register("a0", t.createRenderer("hi", "")),
  e = t.conditional(1, 0),
  n = t.effect("a1", (r) =>
    t.on(
      r[0],
      "click",
      ((t) => {
        const { 2: r } = t;
        return function () {
          a(t, !r);
        };
      })(r),
    ),
  ),
  a = t.state(2, (t, r) => {
    n(t), e(t, r ? o : null);
  });
r();
