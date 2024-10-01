// size: 838 (min) 424 (brotli)

import {
  value as o,
  data as i,
  registerRenderer as n,
  createRenderer as l,
  register as t,
  on as d,
  closure as v,
  queueSource as c,
  queueEffect as r,
  intersections as u,
  inLoopScope as m,
  intersection as s,
  inChild as b,
  loopOf as e,
  init as D,
} from "@marko/runtime-tags/dom";
const a = o(3, (o, n) => i(o[0], n)),
  f = s(
    2,
    (o) => {
      const {
        _: { 2: i },
        2: n,
      } = o;
      a(o[0], `${i}.${n}`);
    },
    () => b(0, a),
  ),
  g = v(2, null, void 0, () => f),
  k = o(2, null, () => f),
  $ = o(
    1,
    (o, i) => k(o, i[0]),
    () => k,
  ),
  h = e(
    0,
    n(
      "b0",
      l(
        "<div> </div>",
        "/D l&",
        (o) => {
          o[0];
        },
        () => [g],
        void 0,
        () => $,
      ),
    ),
  ),
  p = o(2, null, () => m(g, 0)),
  _ = v(
    2,
    (o, i) => h(o, [i]),
    void 0,
    () => h,
  ),
  j = o(
    1,
    (o, i) => p(o, i[0]),
    () => p,
  ),
  q = e(
    1,
    n(
      "b1",
      l(
        "<!><!><!>",
        "D%D",
        void 0,
        () => [_],
        void 0,
        () => j,
      ),
    ),
  ),
  w = t("b2", (o) =>
    d(
      o[0],
      "click",
      ((o) => {
        const { 2: i } = o;
        return function () {
          c(o, x, [...i, i.length]);
        };
      })(o),
    ),
  ),
  x = o(
    2,
    (o, i) => {
      r(o, w), q(o, [i]);
    },
    () => u([q, m(_, 1)]),
  );
D();
