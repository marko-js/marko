// size: 738 (min) 401 (brotli)

import {
  value as o,
  data as i,
  registerRenderer as n,
  createRenderer as l,
  inLoopScope as t,
  register as d,
  on as v,
  queueEffect as c,
  intersections as r,
  closure as u,
  loopOf as m,
  queueSource as s,
  intersection as b,
  init as e,
} from "@marko/runtime-tags/dom";
const D = o(3, (o, n) => i(o[0], n)),
  a = b(2, (o) => {
    const {
      _: { 2: i },
      2: n,
    } = o;
    D(o[0], `${i}.${n}`);
  }),
  f = u(2, null, void 0, a),
  g = o(2, null, a),
  k = m(
    0,
    n(
      "b0",
      l(
        "<div> </div>",
        "/D l&",
        (o) => {
          o[0];
        },
        [f],
        void 0,
        o(1, (o, i) => g(o, i[0]), g),
      ),
    ),
  ),
  $ = o(2, null, t(f, 0)),
  h = u(2, (o, i) => k(o, [i]), void 0, k),
  p = m(
    1,
    n(
      "b1",
      l(
        "<!><!><!>",
        "D%D",
        void 0,
        [h],
        void 0,
        o(1, (o, i) => $(o, i[0]), $),
      ),
    ),
  ),
  _ = d("b2", (o) =>
    v(
      o[0],
      "click",
      ((o) => {
        const { 2: i } = o;
        return function () {
          s(o, j, [...i, i.length]);
        };
      })(o),
    ),
  ),
  j = o(
    2,
    (o, i) => {
      c(o, _), p(o, [i]);
    },
    r([p, t(h, 1)]),
  );
e();
