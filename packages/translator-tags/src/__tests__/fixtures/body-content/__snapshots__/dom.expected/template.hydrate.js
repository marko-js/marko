// size: 697 (min) 395 (brotli)

import {
  dynamicTagAttrs as o,
  register as r,
  attrsEvents as n,
  value as t,
  attrs as d,
  queueEffect as e,
  conditional as i,
  registerSubscriber as m,
  dynamicClosure as c,
  data as a,
  createRendererWithOwner as b,
  state as s,
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
      q(o, r + 1);
    };
  }),
  h = m(
    "b1",
    c(1, (o, r) => a(o[0], r)),
  ),
  j = r(
    "b2",
    b(" ", " ", void 0, () => [h]),
  ),
  q = s(
    1,
    (o, r) => v(o[0], { onClick: C(o), renderBody: j(o) }),
    () => u([f(0, v), k(1)]),
  );
y();
