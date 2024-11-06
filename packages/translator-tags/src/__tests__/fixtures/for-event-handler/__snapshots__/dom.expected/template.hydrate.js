// size: 491 (min) 292 (brotli)

import {
  effect as o,
  on as t,
  register as n,
  createRenderer as i,
  value as r,
  closure as c,
  state as m,
  intersections as u,
  inLoopScope as a,
  data as d,
  loopTo as s,
  init as b,
} from "@marko/runtime-tags/dom";
const e = r(3, (o, t) => d(o[1], t)),
  f = r(2, (o, t) => e(o, t[0])),
  k = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const {
          _: { 1: t },
        } = o;
        return function () {
          g(o._, t + 1);
        };
      })(o),
    ),
  ),
  v = c(1, (o, t) => k(o)),
  _ = s(
    0,
    n(
      "a1",
      i(
        "<button> </button>",
        " D ",
        void 0,
        () => [v],
        void 0,
        () => f,
      ),
    ),
  ),
  g = m(
    1,
    (o, t) => _(o, [t, 0, 1]),
    () => u([_, a(v, 0)]),
  );
b();
