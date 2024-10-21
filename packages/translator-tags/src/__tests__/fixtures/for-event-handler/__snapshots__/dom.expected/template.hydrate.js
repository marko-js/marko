// size: 506 (min) 298 (brotli)

import {
  register as o,
  on as t,
  createRenderer as n,
  value as i,
  queueSource as r,
  closure as c,
  queueEffect as m,
  intersections as u,
  inLoopScope as a,
  data as d,
  loopTo as s,
  init as b,
} from "@marko/runtime-tags/dom";
const e = i(3, (o, t) => d(o[1], t)),
  f = i(2, (o, t) => e(o, t[0])),
  k = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const {
          _: { 1: t },
        } = o;
        return function () {
          r(o._, g, t + 1);
        };
      })(o),
    ),
  ),
  v = c(1, (o, t) => m(o, k)),
  _ = s(
    0,
    o(
      "a1",
      n(
        "<button> </button>",
        " D ",
        void 0,
        () => [v],
        void 0,
        () => f,
      ),
    ),
  ),
  g = i(
    1,
    (o, t) => _(o, [t, 0, 1]),
    () => u([_, a(v, 0)]),
  );
b();
