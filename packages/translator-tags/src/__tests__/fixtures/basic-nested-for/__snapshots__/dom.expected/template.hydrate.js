// size: 854 (min) 409 (brotli)

import * as e from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const r = e.value(3, (o, r) => e.data(o[0], r)),
  t = e.intersection(
    2,
    (e) => {
      const {
        _: { 2: o },
        2: t,
      } = e;
      r(e[0], `${o}.${t}`);
    },
    () => e.inChild(0, r),
  ),
  i = e.closure(2, 0, void 0, () => t),
  n = e.value(2, 0, () => t),
  a = e.value(
    1,
    (e, o) => n(e, o[0]),
    () => n,
  ),
  c = (e) => {
    e[0];
  },
  s = e.register(
    "b0",
    e.createRenderer(
      "<div> </div>",
      "/D l&",
      c,
      () => [i],
      void 0,
      () => a,
    ),
  ),
  d = e.loopOf(0, s),
  l = e.value(2, 0, () => e.inLoopScope(i, 0)),
  v = e.closure(
    2,
    (e, o) => d(e, [o]),
    void 0,
    () => d,
  ),
  u = e.value(
    1,
    (e, o) => l(e, o[0]),
    () => l,
  ),
  m = e.register(
    "b1",
    e.createRenderer(
      "<!><!><!>",
      "D%D",
      void 0,
      () => [v],
      void 0,
      () => u,
    ),
  ),
  p = e.loopOf(1, m),
  f = e.effect("b2", (o) =>
    e.on(
      o[0],
      "click",
      ((e) => {
        const { 2: o } = e;
        return function () {
          g(e, [...o, o.length]);
        };
      })(o),
    ),
  ),
  g = e.state(
    2,
    (e, o) => {
      f(e), p(e, [o]);
    },
    () => e.intersections([p, e.inLoopScope(v, 1)]),
  );
o();
