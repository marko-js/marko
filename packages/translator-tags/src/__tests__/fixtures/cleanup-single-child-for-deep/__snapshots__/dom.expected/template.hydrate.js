// size: 1378 (min) 582 (brotli)

import * as e from "@marko/runtime-tags/dom";
import { init as i } from "@marko/runtime-tags/dom";
const o = "<div> </div>",
  n = e.effect("a0", (i) => {
    e.getAbortSignal(i, 0).onabort = ((e) => {
      const { 3: i, 4: o } = e;
      return () => {
        o(`destroyed ${i}`);
      };
    })(i);
  }),
  t = e.intersection(2, (i) => {
    e.resetAbortSignal(i, 0), n(i);
  }),
  r = e.value(4, null, () => t),
  l = e.value(
    3,
    (i, o) => e.data(i[0], o),
    () => t,
  );
e.register(
  "b0",
  (e) =>
    function (i) {
      e[1].innerHTML += "\n" + i;
    },
);
const s = e.intersection(
    2,
    (e) => {
      const {
        _: { 3: i },
        2: o,
      } = e;
      l(e[0], `${i}.${o}`);
    },
    () => e.inChild(0, l),
  ),
  c = e.dynamicClosure(
    4,
    (e, i) => r(e[0], i),
    (e) => e._._,
    () => e.inChild(0, r),
  ),
  d = e.closure(3, null, void 0, () => s),
  a = e.value(2, null, () => s),
  u = e.value(
    1,
    (e, i) => a(e, i[0]),
    () => a,
  ),
  v = (e) => {
    e[0];
  },
  m = e.register(
    "b1",
    e.createRenderer(
      `<div>${o}</div>`,
      "D/D l&",
      v,
      () => [c, d],
      void 0,
      () => u,
    ),
  ),
  f = e.loopOf(1, m),
  g = e.closure(
    4,
    (e, i) => r(e[0], i),
    void 0,
    () => e.inChild(0, r),
  ),
  p = e.value(
    3,
    (e, i) => l(e[0], `${i}`),
    () => e.intersections([e.inChild(0, l), e.inLoopScope(d, 1)]),
  ),
  b = e.closure(
    3,
    (e, i) => f(e, [i]),
    void 0,
    () => f,
  ),
  $ = e.value(
    2,
    (e, i) => p(e, i[0]),
    () => p,
  ),
  h = (e) => {
    e[0];
  },
  C = e.register(
    "b2",
    e.createRenderer(
      `<div>${o}<!></div>`,
      "D/D l&%",
      h,
      () => [g, b],
      void 0,
      () => $,
    ),
  ),
  D = e.loopOf(2, C),
  S = e.effect("b3", (i) =>
    e.on(
      i[0],
      "click",
      ((e) => {
        const { 3: i } = e;
        return function () {
          k(e, i.length ? i.slice(0, -1) : [1, 2, 3]);
        };
      })(i),
    ),
  ),
  k = e.state(
    3,
    (e, i) => {
      S(e), D(e, [i]);
    },
    () => e.intersections([D, e.inLoopScope(b, 2)]),
  );
i();
