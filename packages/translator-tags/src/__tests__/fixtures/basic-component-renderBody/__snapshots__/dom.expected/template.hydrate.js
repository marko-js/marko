// size: 522 (min) 285 (brotli)

import {
  register as o,
  on as t,
  value as n,
  queueEffect as c,
  queueSource as r,
  registerSubscriber as i,
  dynamicClosure as m,
  data as s,
  createRendererWithOwner as a,
  intersections as b,
  inChild as u,
  dynamicSubscribers as d,
  init as e,
} from "@marko/runtime-tags/dom";
const f = o("a0", (o) => {
    const { 4: n } = o;
    t(o[0], "click", n);
  }),
  k = n(4, (o, t) => c(o, f)),
  g = o("b0", (o) => {
    const { 1: t } = o;
    return function () {
      r(o, p, t + 1);
    };
  }),
  l = i(
    "b1",
    m(1, (o, t) => s(o[0], t)),
  );
o(
  "b2",
  a(" ", " ", void 0, () => [l]),
);
const p = n(
  1,
  (o, t) => k(o[0], g(o)),
  () => b([u(0, k), d(1)]),
);
e();
