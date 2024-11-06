// size: 540 (min) 303 (brotli)

import {
  dynamicTagAttrs as o,
  register as t,
  on as n,
  value as c,
  queueEffect as r,
  registerSubscriber as i,
  dynamicClosure as m,
  data as s,
  createRendererWithOwner as a,
  state as b,
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
      v(o, t + 1);
    };
  }),
  p = i(
    "b1",
    m(1, (o, t) => s(o[0], t)),
  );
t(
  "b2",
  a(" ", " ", void 0, () => [p]),
);
const v = b(
  1,
  (o, t) => g(o[0], l(o)),
  () => u([d(0, g), e(1)]),
);
f();
