// size: 808 (min) 410 (brotli)

import {
  value as o,
  data as i,
  register as n,
  createRenderer as l,
  on as t,
  closure as d,
  state as v,
  queueEffect as c,
  intersections as r,
  inLoopScope as u,
  intersection as m,
  inChild as s,
  loopOf as b,
  init as e,
} from "@marko/runtime-tags/dom";
const D = o(3, (o, n) => i(o[0], n)),
  a = m(
    2,
    (o) => {
      const {
        _: { 2: i },
        2: n,
      } = o;
      D(o[0], `${i}.${n}`);
    },
    () => s(0, D),
  ),
  f = d(2, null, void 0, () => a),
  g = o(2, null, () => a),
  k = o(
    1,
    (o, i) => g(o, i[0]),
    () => g,
  ),
  $ = b(
    0,
    n(
      "b0",
      l(
        "<div> </div>",
        "/D l&",
        (o) => {
          o[0];
        },
        () => [f],
        void 0,
        () => k,
      ),
    ),
  ),
  h = o(2, null, () => u(f, 0)),
  p = d(
    2,
    (o, i) => $(o, [i]),
    void 0,
    () => $,
  ),
  _ = o(
    1,
    (o, i) => h(o, i[0]),
    () => h,
  ),
  j = b(
    1,
    n(
      "b1",
      l(
        "<!><!><!>",
        "D%D",
        void 0,
        () => [p],
        void 0,
        () => _,
      ),
    ),
  ),
  q = n("b2", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 2: i } = o;
        return function () {
          w(o, [...i, i.length]);
        };
      })(o),
    ),
  ),
  w = v(
    2,
    (o, i) => {
      c(o, q), j(o, [i]);
    },
    () => r([j, u(p, 1)]),
  );
e();
