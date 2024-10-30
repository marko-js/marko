// size: 548 (min) 311 (brotli)

import {
  dynamicTagAttrs as o,
  register as t,
  on as n,
  value as c,
  queueEffect as r,
  queueSource as i,
  registerSubscriber as m,
  dynamicClosure as s,
  data as a,
  createRendererWithOwner as b,
  intersections as u,
  inChild as d,
  dynamicSubscribers as e,
  init as f,
} from "@marko/runtime-tags/dom";
o(1);
const k = t("a0", (o) => {
    const { 4: t } = o;
    n(o[0], "click", t);
  }),
  g = c(4, (o, t) => r(o, k)),
  l = t("b0", (o) => {
    const { 1: t } = o;
    return function () {
      i(o, v, t + 1);
    };
  }),
  p = m(
    "b1",
    s(1, (o, t) => a(o[0], t)),
  );
t(
  "b2",
  b(" ", " ", void 0, () => [p]),
);
const v = c(
  1,
  (o, t) => g(o[0], l(o)),
  () => u([d(0, g), e(1)]),
);
f();
