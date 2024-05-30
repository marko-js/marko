// size: 482 (min) 283 (brotli)

import {
  register as o,
  on as t,
  registerRenderer as n,
  createRenderer as c,
  value as i,
  inLoopScope as r,
  queueSource as m,
  closure as u,
  queueEffect as d,
  loopTo as s,
  data as a,
  init as b,
} from "@marko/runtime-tags/dom";
const e = i(3, (o, t) => a(o[1], t)),
  f = i(2, (o, t) => e(o, t[0])),
  k = o("c", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const {
          _: { 1: t },
        } = o;
        return function () {
          m(o._, g, t + 1);
        };
      })(o),
    ),
  ),
  v = u(1, (o, t) => d(o, k)),
  _ = s(0, n("d", c("<button> </button>", " D ", void 0, [v], void 0, f))),
  g = i(1, (o, t) => _(o, [t, 0, 1]), r(v, 0));
b();
