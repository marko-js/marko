// size: 647 (min) 348 (brotli)

import {
  register as o,
  attrsEvents as r,
  value as n,
  attrs as d,
  queueEffect as e,
  conditional as t,
  queueSource as c,
  registerSubscriber as i,
  dynamicClosure as m,
  data as f,
  registerRenderer as s,
  createRenderer as u,
  bindRenderer as a,
  intersections as k,
  inChild as y,
  dynamicSubscribers as B,
  init as g,
} from "@marko/runtime-tags/dom";
const l = t(1),
  p = o("f", (o) => r(o, 0)),
  v = n(4, (o, r) => l(o, r), l),
  C = n(
    3,
    (o, r) => {
      ((o, r) => {
        d(o, 0, r), e(o, p);
      })(o, r),
        v(o, r.renderBody);
    },
    v,
  ),
  b = o("c", (o) => {
    const { 1: r } = o;
    return function () {
      c(o, j, r + 1);
    };
  }),
  h = s(
    "e",
    u(" ", " ", void 0, [
      i(
        "d",
        m(1, (o, r) => f(o[0], r)),
      ),
    ]),
  ),
  j = n(
    1,
    (o, r) => C(o[0], { onClick: b(o), renderBody: a(o, h) }),
    k([y(0, C), B(1)]),
  );
g();
