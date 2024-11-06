// size: 303 (min) 191 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const r = t.register("a0", t.createRenderer("Hello!", "")),
  e = t.conditional(0, 0),
  n = t.effect("a1", (o) =>
    t.on(
      o[1],
      "click",
      ((t) => {
        const { 2: o } = t;
        return function () {
          a(t, !o);
        };
      })(o),
    ),
  ),
  a = t.state(2, (t, o) => {
    n(t), e(t, o ? r : null);
  });
o();
