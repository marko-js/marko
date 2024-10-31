// size: 920 (min) 444 (brotli)

import {
  dynamicTagAttrs as o,
  value as i,
  intersection as n,
  conditional as d,
  registerSubscriber as t,
  dynamicClosure as c,
  data as l,
  register as v,
  createRendererWithOwner as r,
  inChild as u,
  on as b,
  queueSource as m,
  queueEffect as s,
  dynamicSubscribers as a,
  init as e,
} from "@marko/runtime-tags/dom";
const f = o(0),
  k = n(
    2,
    (o) => {
      const { 4: i } = o;
      f(o, () => i);
    },
    () => f,
  ),
  D = d(0, null, () => k),
  g = i(4, null, () => k),
  p = i(
    3,
    (o, i) => D(o, i),
    () => D,
  ),
  h = i(3, (o, i) => l(o[1], i)),
  j = t(
    "b0",
    c(2, (o, i) => l(o[0], i)),
  ),
  q = i(2, (o, i) => h(o, i[0])),
  w = v(
    "b1",
    r(
      "<div><!>.<!></div>",
      "D%c%",
      void 0,
      () => [j],
      void 0,
      () => q,
    ),
  ),
  x = t(
    "b2",
    c(
      3,
      (o, i) => g(o[0], i),
      void 0,
      () => u(0, g),
    ),
  ),
  y = i(2, null, () => a(2)),
  z = i(
    1,
    (o, i) => y(o, i[0]),
    () => y,
  );
v(
  "b3",
  r(
    "<div><!></div>",
    "/D%l&",
    (o) => {
      o[0], p(o[0], w(o));
    },
    () => [x],
    void 0,
    () => z,
  ),
);
const A = v("b4", (o) =>
    b(
      o[0],
      "click",
      ((o) => {
        const { 2: i } = o;
        return function () {
          m(o, B, i + 1);
        };
      })(o),
    ),
  ),
  B = i(
    2,
    (o, i) => {
      s(o, A), g(o[1], i);
    },
    () => u(1, g),
  );
e();
