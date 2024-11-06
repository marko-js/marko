// size: 279 (min) 175 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const o = t.effect("a0", (a) =>
    t.on(
      a[1],
      "click",
      ((t) => {
        const { 3: a } = t;
        return function () {
          r(t, !a);
        };
      })(a),
    ),
  ),
  r = t.state(3, (a, r) => {
    t.attr(a[0], "disabled", r), t.data(a[2], r ? "enable" : "disable"), o(a);
  });
a();
