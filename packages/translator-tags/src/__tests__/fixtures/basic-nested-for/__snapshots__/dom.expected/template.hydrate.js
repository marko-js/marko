// size: 863 (min) 412 (brotli)

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
  i = e.closure(2, null, void 0, () => t),
  n = e.value(2, null, () => t),
  l = e.value(
    1,
    (e, o) => n(e, o[0]),
    () => n,
  ),
  a = (e) => {
    e[0];
  },
  c = e.register(
    "b0",
    e.createRenderer(
      "<div> </div>",
      "/D l&",
      a,
      () => [i],
      void 0,
      () => l,
    ),
  ),
  s = e.loopOf(0, c),
  u = e.value(2, null, () => e.inLoopScope(i, 0)),
  d = e.closure(
    2,
    (e, o) => s(e, [o]),
    void 0,
    () => s,
  ),
  v = e.value(
    1,
    (e, o) => u(e, o[0]),
    () => u,
  ),
  m = e.register(
    "b1",
    e.createRenderer(
      "<!><!><!>",
      "D%D",
      void 0,
      () => [d],
      void 0,
      () => v,
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
    () => e.intersections([p, e.inLoopScope(d, 1)]),
  );
o();
