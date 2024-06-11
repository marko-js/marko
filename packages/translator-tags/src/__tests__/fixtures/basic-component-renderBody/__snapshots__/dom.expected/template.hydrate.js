// size: 519 (min) 274 (brotli)

import {
  register as o,
  on as t,
  value as n,
  queueEffect as c,
  queueSource as r,
  registerSubscriber as i,
  dynamicClosure as m,
  data as s,
  registerRenderer as a,
  createRenderer as b,
  intersections as u,
  inChild as d,
  dynamicSubscribers as e,
  init as f,
} from "@marko/runtime-tags/dom";
const k = o("a0", (o) => {
    const { 4: n } = o;
    t(o[0], "click", n);
  }),
  g = n(4, (o, t) => c(o, k)),
  l = o("b0", (o) => {
    const { 1: t } = o;
    return function () {
      r(o, p, t + 1);
    };
  });
a(
  "b2",
  b(" ", " ", void 0, [
    i(
      "b1",
      m(1, (o, t) => s(o[0], t)),
    ),
  ]),
);
const p = n(1, (o, t) => g(o[0], l(o)), u([d(0, g), e(1)]));
f();
