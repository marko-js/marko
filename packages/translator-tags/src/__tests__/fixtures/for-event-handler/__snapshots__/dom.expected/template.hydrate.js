// size: 508 (min) 300 (brotli)

import {
  register as o,
  on as t,
  registerRenderer as n,
  createRenderer as c,
  value as i,
  intersections as r,
  inLoopScope as m,
  queueSource as u,
  closure as d,
  queueEffect as s,
  loopTo as a,
  data as b,
  init as e,
} from "@marko/runtime-tags/dom";
const f = i(3, (o, t) => b(o[1], t)),
  k = i(2, (o, t) => f(o, t[0])),
  v = o("c", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const {
          _: { 1: t },
        } = o;
        return function () {
          u(o._, l, t + 1);
        };
      })(o),
    ),
  ),
  _ = d(1, (o, t) => s(o, v)),
  g = a(0, n("d", c("<button> </button>", " D ", void 0, [_], void 0, k))),
  l = i(1, (o, t) => g(o, [t, 0, 1]), r([g, m(_, 0)]));
e();
