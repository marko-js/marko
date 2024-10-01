// size: 679 (min) 376 (brotli)

import {
  register as o,
  attrsEvents as r,
  value as n,
  attrs as t,
  queueEffect as d,
  conditional as e,
  queueSource as i,
  registerSubscriber as m,
  dynamicClosure as c,
  data as a,
  registerRenderer as b,
  createRenderer as s,
  bindRenderer as u,
  intersections as f,
  inChild as k,
  dynamicSubscribers as y,
  init as B,
} from "@marko/runtime-tags/dom";
const g = e(1),
  l = o("a0", (o) => r(o, 0)),
  p = n(
    4,
    (o, r) => g(o, r),
    () => g,
  ),
  v = n(
    3,
    (o, r) => {
      ((o, r) => {
        t(o, 0, r), d(o, l);
      })(o, r),
        p(o, r.renderBody);
    },
    () => p,
  ),
  C = o("b0", (o) => {
    const { 1: r } = o;
    return function () {
      i(o, q, r + 1);
    };
  }),
  h = m(
    "b1",
    c(1, (o, r) => a(o[0], r)),
  ),
  j = b(
    "b2",
    s(" ", " ", void 0, () => [h]),
  ),
  q = n(
    1,
    (o, r) => v(o[0], { onClick: C(o), renderBody: u(o, j) }),
    () => f([k(0, v), y(1)]),
  );
B();
