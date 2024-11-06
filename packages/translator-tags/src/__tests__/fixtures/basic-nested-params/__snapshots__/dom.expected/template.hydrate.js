// size: 989 (min) 423 (brotli)

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
  n = e.conditional(0, null, () => t),
  a = e.value(4, null, () => t),
  o = e.value(
    3,
    (e, r) => n(e, r),
    () => n,
  ),
  d = e.value(3, (r, i) => e.data(r[1], i)),
  c = e.registerSubscriber(
    "b0",
    e.dynamicClosure(2, (r, i) => e.data(r[0], i)),
  ),
  s = e.value(2, (e, r) => d(e, r[0])),
  l = e.register(
    "b1",
    e.createRendererWithOwner(
      "<div><!>.<!></div>",
      "D%c%",
      void 0,
      () => [c],
      void 0,
      () => s,
    ),
  ),
  u = e.registerSubscriber(
    "b2",
    e.dynamicClosure(
      3,
      (e, r) => a(e[0], r),
      void 0,
      () => e.inChild(0, a),
    ),
  ),
  m = e.value(2, null, () => e.dynamicSubscribers(2)),
  v = e.value(
    1,
    (e, r) => m(e, r[0]),
    () => m,
  ),
  b = (e) => {
    e[0], o(e[0], l(e));
  };
e.register(
  "b3",
  e.createRendererWithOwner(
    "<div><!></div>",
    "/D%l&",
    b,
    () => [u],
    void 0,
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
      g(e), a(e[1], r);
    },
    () => e.inChild(1, a),
  );
r();
