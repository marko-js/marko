// size: 481 (min) 272 (brotli)

import * as o from "@marko/runtime-tags/dom";
import { init as t } from "@marko/runtime-tags/dom";
const e = o.value(3, (t, e) => o.data(t[1], e)),
  r = o.value(2, (o, t) => e(o, t[0])),
  n = o.effect("a0", (t) =>
    o.on(
      t[0],
      "click",
      ((o) => {
        const {
          _: { 1: t },
        } = o;
        return function () {
          m(o._, t + 1);
        };
      })(t),
    ),
  ),
  a = o.closure(1, (o, t) => n(o)),
  i = o.register(
    "a1",
    o.createRenderer(
      "<button> </button>",
      " D ",
      void 0,
      () => [a],
      () => r,
    ),
  ),
  c = o.loopTo(0, i),
  m = o.state(
    1,
    (o, t) => c(o, [t, 0, 1]),
    () => o.intersections([c, o.inLoopScope(a, 0)]),
  );
t();
