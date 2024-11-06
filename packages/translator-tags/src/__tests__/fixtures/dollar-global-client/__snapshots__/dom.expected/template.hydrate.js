// size: 345 (min) 215 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const o = (a) => {
    t.data(a[0], a.$global.x);
  },
  r = t.register("a0", t.createRenderer("<span> </span>", "D ", o)),
  n = t.conditional(0),
  e = t.effect("a1", (a) =>
    t.on(
      a[1],
      "click",
      ((t) => {
        const { 2: a } = t;
        return function () {
          m(t, !a);
        };
      })(a),
    ),
  ),
  m = t.state(2, (t, a) => {
    e(t), n(t, a ? r : null);
  });
a();
