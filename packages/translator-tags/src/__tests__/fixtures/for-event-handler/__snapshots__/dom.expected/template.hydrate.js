// size: 510 (min) 307 (brotli)

import {
  register as o,
  on as t,
  registerRenderer as n,
  createRenderer as i,
  value as r,
  intersections as c,
  inLoopScope as m,
  queueSource as u,
  closure as a,
  queueEffect as d,
  loopTo as s,
  data as b,
  init as e,
} from "@marko/runtime-tags/dom";
const f = r(3, (o, t) => b(o[1], t)),
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
          u(o._, l, t + 1);
        };
      })(o),
    ),
  ),
  _ = a(1, (o, t) => d(o, v)),
  g = s(0, n("a1", i("<button> </button>", " D ", void 0, [_], void 0, k))),
  l = r(1, (o, t) => g(o, [t, 0, 1]), c([g, m(_, 0)]));
e();
