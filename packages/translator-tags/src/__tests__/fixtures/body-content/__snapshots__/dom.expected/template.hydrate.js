// size: 705 (min) 405 (brotli)

import {
  dynamicTagAttrs as o,
  register as r,
  attrsEvents as n,
  value as t,
  attrs as d,
  queueEffect as e,
  conditional as i,
  queueSource as m,
  registerSubscriber as c,
  dynamicClosure as a,
  data as b,
  createRendererWithOwner as s,
  intersections as u,
  inChild as f,
  dynamicSubscribers as k,
  init as y,
} from "@marko/runtime-tags/dom";
const B = o(1),
  g = i(
    1,
    (o) => B(o, () => ({})),
    () => B,
  ),
  l = r("a0", (o) => {
    n(o, 0);
  }),
  p = t(
    4,
    (o, r) => g(o, r),
    () => g,
  ),
  v = t(
    3,
    (o, r) => {
      ((o, r) => {
        d(o, 0, r), e(o, l);
      })(o, r),
        p(o, r.renderBody);
    },
    () => p,
  ),
  C = r("b0", (o) => {
    const { 1: r } = o;
    return function () {
      m(o, q, r + 1);
    };
  }),
  h = c(
    "b1",
    a(1, (o, r) => b(o[0], r)),
  ),
  j = r(
    "b2",
    s(" ", " ", void 0, () => [h]),
  ),
  q = t(
    1,
    (o, r) => v(o[0], { onClick: C(o), renderBody: j(o) }),
    () => u([f(0, v), k(1)]),
  );
y();
