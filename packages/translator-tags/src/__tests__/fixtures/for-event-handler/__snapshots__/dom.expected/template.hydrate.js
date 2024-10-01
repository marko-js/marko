// size: 528 (min) 303 (brotli)

import {
  register as o,
  on as t,
  registerRenderer as n,
  createRenderer as i,
  value as r,
  queueSource as c,
  closure as m,
  queueEffect as u,
  intersections as a,
  inLoopScope as d,
  data as s,
  loopTo as b,
  init as e,
} from "@marko/runtime-tags/dom";
const f = r(3, (o, t) => s(o[1], t)),
  k = r(2, (o, t) => f(o, t[0])),
  v = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const {
          _: { 1: t },
        } = o;
        return function () {
          c(o._, l, t + 1);
        };
      })(o),
    ),
  ),
  _ = m(1, (o, t) => u(o, v)),
  g = b(
    0,
    n(
      "a1",
      i(
        "<button> </button>",
        " D ",
        void 0,
        () => [_],
        void 0,
        () => k,
      ),
    ),
  ),
  l = r(
    1,
    (o, t) => g(o, [t, 0, 1]),
    () => a([g, d(_, 0)]),
  );
e();
