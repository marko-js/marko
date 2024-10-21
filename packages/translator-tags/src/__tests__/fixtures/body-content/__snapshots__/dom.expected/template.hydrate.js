// size: 646 (min) 363 (brotli)

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
  createRendererWithOwner as b,
  intersections as s,
  inChild as u,
  dynamicSubscribers as f,
  init as k,
} from "@marko/runtime-tags/dom";
const y = e(1),
  B = o("a0", (o) => r(o, 0)),
  g = n(
    4,
    (o, r) => y(o, r),
    () => y,
  ),
  l = n(
    3,
    (o, r) => {
      ((o, r) => {
        t(o, 0, r), d(o, B);
      })(o, r),
        g(o, r.renderBody);
    },
    () => g,
  ),
  p = o("b0", (o) => {
    const { 1: r } = o;
    return function () {
      i(o, h, r + 1);
    };
  }),
  v = m(
    "b1",
    c(1, (o, r) => a(o[0], r)),
  ),
  C = o(
    "b2",
    b(" ", " ", void 0, () => [v]),
  ),
  h = n(
    1,
    (o, r) => l(o[0], { onClick: p(o), renderBody: C(o) }),
    () => s([u(0, l), f(1)]),
  );
k();
