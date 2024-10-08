// size: 953 (min) 448 (brotli)

import {
  dynamicTagAttrs as o,
  value as i,
  intersection as n,
  conditional as d,
  registerSubscriber as t,
  dynamicClosure as c,
  data as l,
  registerRenderer as v,
  createRenderer as r,
  inChild as u,
  register as b,
  on as m,
  bindRenderer as s,
  queueSource as a,
  queueEffect as e,
  dynamicSubscribers as f,
  init as k,
} from "@marko/runtime-tags/dom";
const D = o(0),
  g = n(
    2,
    (o) => {
      const { 4: i } = o;
      D(o, () => i);
    },
    () => D,
  ),
  p = d(0, null, () => g),
  h = i(4, null, () => g),
  j = i(
    3,
    (o, i) => p(o, i),
    () => p,
  ),
  q = i(3, (o, i) => l(o[1], i)),
  w = t(
    "b0",
    c(2, (o, i) => l(o[0], i)),
  ),
  x = i(2, (o, i) => q(o, i[0])),
  y = v(
    "b1",
    r(
      "<div><!>.<!></div>",
      "D%c%",
      void 0,
      () => [w],
      void 0,
      () => x,
    ),
  ),
  z = t(
    "b2",
    c(
      3,
      (o, i) => h(o[0], i),
      void 0,
      () => u(0, h),
    ),
  ),
  A = i(2, null, () => f(2)),
  B = i(
    1,
    (o, i) => A(o, i[0]),
    () => A,
  );
v(
  "b3",
  r(
    "<div><!></div>",
    "/D%l&",
    (o) => {
      o[0], j(o[0], s(o, y));
    },
    () => [z],
    void 0,
    () => B,
  ),
);
const C = b("b4", (o) =>
    m(
      o[0],
      "click",
      ((o) => {
        const { 2: i } = o;
        return function () {
          a(o, E, i + 1);
        };
      })(o),
    ),
  ),
  E = i(
    2,
    (o, i) => {
      e(o, C), h(o[1], i);
    },
    () => u(1, h),
  );
k();
