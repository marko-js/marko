// size: 758 (min) 417 (brotli)

import {
  value as o,
  data as i,
  intersection as n,
  inChild as l,
  registerRenderer as t,
  createRenderer as d,
  inLoopScope as v,
  register as c,
  on as r,
  queueEffect as u,
  intersections as m,
  closure as s,
  loopOf as b,
  queueSource as e,
  init as D,
} from "@marko/runtime-tags/dom";
const a = o(3, (o, n) => i(o[0], n)),
  f = n(
    2,
    (o) => {
      const {
        _: { 2: i },
        2: n,
      } = o;
      a(o[0], `${i}.${n}`);
    },
    l(0, a),
  ),
  g = s(2, null, void 0, f),
  k = o(2, null, f),
  $ = b(
    0,
    t(
      "b0",
      d(
        "<div> </div>",
        "/D l&",
        (o) => {
          o[0];
        },
        [g],
        void 0,
        o(1, (o, i) => k(o, i[0]), k),
      ),
    ),
  ),
  h = o(2, null, v(g, 0)),
  p = s(2, (o, i) => $(o, [i]), void 0, $),
  _ = b(
    1,
    t(
      "b1",
      d(
        "<!><!><!>",
        "D%D",
        void 0,
        [p],
        void 0,
        o(1, (o, i) => h(o, i[0]), h),
      ),
    ),
  ),
  j = c("b2", (o) =>
    r(
      o[0],
      "click",
      ((o) => {
        const { 2: i } = o;
        return function () {
          e(o, q, [...i, i.length]);
        };
      })(o),
    ),
  ),
  q = o(
    2,
    (o, i) => {
      u(o, j), _(o, [i]);
    },
    m([_, v(p, 1)]),
  );
D();
