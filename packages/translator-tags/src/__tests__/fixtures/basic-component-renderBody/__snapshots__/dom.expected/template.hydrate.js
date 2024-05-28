// size: 515 (min) 275 (brotli)

import {
  register as o,
  on as t,
  value as c,
  queueEffect as n,
  queueSource as r,
  registerSubscriber as i,
  dynamicClosure as m,
  data as s,
  registerRenderer as d,
  createRenderer as e,
  intersections as f,
  inChild as u,
  dynamicSubscribers as a,
  init as k,
} from "@marko/runtime-tags/dom";
const g = o("f", (o) => {
    const { 4: c } = o;
    t(o[0], "click", c);
  }),
  l = c(4, (o, t) => n(o, g)),
  p = o("c", (o) => {
    const { 1: t } = o;
    return function () {
      r(o, v, t + 1);
    };
  });
d(
  "e",
  e(" ", " ", void 0, [
    i(
      "d",
      m(1, (o, t) => s(o[0], t)),
    ),
  ]),
);
const v = c(1, (o, t) => l(o[0], p(o)), f([u(0, l), a(1)]));
k();
