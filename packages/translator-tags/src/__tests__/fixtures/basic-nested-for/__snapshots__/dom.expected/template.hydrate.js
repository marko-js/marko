// size: 801 (min) 407 (brotli)

import {
  value as o,
  data as i,
  register as n,
  createRenderer as l,
  effect as t,
  on as d,
  closure as v,
  state as c,
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
  f = v(2, null, void 0, () => a),
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
  p = v(
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
  q = t("b2", (o) =>
    d(
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
  w = c(
    2,
    (o, i) => {
      q(o), j(o, [i]);
    },
    () => r([j, u(p, 1)]),
  );
e();
