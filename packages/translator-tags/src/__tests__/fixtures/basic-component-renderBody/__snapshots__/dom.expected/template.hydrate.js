// size: 543 (min) 308 (brotli)

import {
  register as o,
  on as t,
  value as n,
  queueEffect as s,
  queueSource as c,
  registerSubscriber as i,
  dynamicClosure as m,
  data as r,
  registerRenderer as e,
  createRenderer as g,
  intersections as k,
  inChild as u,
  dynamicSubscribers as a,
  init as d,
} from "@marko/runtime-tags/dom";
const f = o("6Wk+Dggs", (o) => {
    const { 4: n } = o;
    t(o[0], "click", n);
  }),
  h = n(4, (o, t) => s(o, f)),
  v = o("4+hmPZwB", (o) => {
    const { 1: t } = o;
    return function () {
      c(o, D, t + 1);
    };
  });
e(
  "ZiDQs0s+",
  g(" ", " ", void 0, [
    i(
      "9ejvhUb/",
      m(1, (o, t) => r(o[0], t)),
    ),
  ]),
);
const D = n(1, (o, t) => h(o[0], v(o)), k([u(0, h), a(1)]));
d();
