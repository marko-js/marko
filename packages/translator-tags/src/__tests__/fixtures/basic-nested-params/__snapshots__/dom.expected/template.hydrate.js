// size: 908 (min) 438 (brotli)

import {
  dynamicTagAttrs as o,
  value as i,
  intersections as n,
  intersection as t,
  conditional as c,
  registerSubscriber as d,
  dynamicClosure as l,
  data as v,
  registerRenderer as r,
  createRenderer as s,
  inChild as u,
  dynamicSubscribers as b,
  register as m,
  on as a,
  queueEffect as e,
  bindRenderer as f,
  queueSource as k,
  init as D,
} from "@marko/runtime-tags/dom";
const g = o(0),
  p = t(
    2,
    (o) => {
      const { 4: i } = o;
      g(o, () => i);
    },
    g,
  ),
  h = c(0, null, p),
  j = i(4, null, p),
  q = i(3, (o, i) => h(o, i), h);
n([q, j]);
const w = i(3, (o, i) => v(o[1], i)),
  x = r(
    "b1",
    s(
      "<div><!>.<!></div>",
      "D%c%",
      void 0,
      [
        d(
          "b0",
          l(2, (o, i) => v(o[0], i)),
        ),
      ],
      void 0,
      i(2, (o, i) => w(o, i[0])),
    ),
  ),
  y = d(
    "b2",
    l(3, (o, i) => j(o[0], i), void 0, u(0, j)),
  ),
  z = i(2, null, b(2));
r(
  "b3",
  s(
    "<div><!></div>",
    "/D%l&",
    (o) => {
      o[0], q(o[0], f(o, x));
    },
    [y],
    void 0,
    i(1, (o, i) => z(o, i[0]), z),
  ),
),
  b(3);
const A = m("b4", (o) =>
    a(
      o[0],
      "click",
      ((o) => {
        const { 2: i } = o;
        return function () {
          k(o, B, i + 1);
        };
      })(o),
    ),
  ),
  B = i(
    2,
    (o, i) => {
      e(o, A), j(o[1], i);
    },
    u(1, j),
  );
D();
