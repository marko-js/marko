// size: 966 (min) 421 (brotli)

import * as e from "@marko/runtime-tags/dom";
import { init as r } from "@marko/runtime-tags/dom";
const i = e.dynamicTagAttrs(0),
  t = e.intersection(
    2,
    (e) => {
      const { 4: r } = e;
      i(e, () => r);
    },
    () => i,
  ),
  a = e.conditional(0, 0, () => t),
  n = e.value(4, 0, () => t),
  o = e.value(
    3,
    (e, r) => a(e, r),
    () => a,
  ),
  c = e.value(3, (r, i) => e.data(r[1], i)),
  s = e.registerSubscriber(
    "b0",
    e.dynamicClosure(2, (r, i) => e.data(r[0], i)),
  ),
  d = e.value(2, (e, r) => c(e, r[0])),
  u = e.register(
    "b1",
    e.createRendererWithOwner(
      "<div><!>.<!></div>",
      "D%c%",
      void 0,
      () => [s],
      () => d,
    ),
  ),
  m = e.registerSubscriber(
    "b2",
    e.dynamicClosure(
      3,
      (e, r) => n(e[0], r),
      void 0,
      () => e.inChild(0, n),
    ),
  ),
  l = e.value(2, 0, () => e.dynamicSubscribers(2)),
  v = e.value(
    1,
    (e, r) => l(e, r[0]),
    () => l,
  ),
  b = (e) => {
    e[0], o(e[0], u(e));
  };
e.register(
  "b3",
  e.createRendererWithOwner(
    "<div><!></div>",
    "/D%l&",
    b,
    () => [m],
    () => v,
  ),
);
const g = e.effect("b4", (r) =>
    e.on(
      r[0],
      "click",
      ((e) => {
        const { 2: r } = e;
        return function () {
          f(e, r + 1);
        };
      })(r),
    ),
  ),
  f = e.state(
    2,
    (e, r) => {
      g(e), n(e[1], r);
    },
    () => e.inChild(1, n),
  );
r();
