// size: 930 (min) 455 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const n = t.effect("a0", (e) => {
    const { 5: n, 6: o } = e;
    o(`mounted ${n}`),
      (t.getAbortSignal(e, 0).onabort = ((t) => {
        const { 5: e, 6: n } = t;
        return () => {
          n(`destroyed ${e}`);
        };
      })(e));
  }),
  o = t.intersection(2, (e) => {
    t.resetAbortSignal(e, 0), n(e);
  }),
  r = t.value(6, 0, () => o),
  a = t.value(
    5,
    (e, n) => {
      t.data(e[0], n), t.data(e[1], n), t.data(e[2], n);
    },
    () => o,
  );
t.register(
  "b0",
  (t) =>
    function (e) {
      t[1].innerHTML += "\n" + e;
    },
);
const i = t.closure(
    4,
    (t, e) => r(t[0], e),
    void 0,
    () => t.inChild(0, r),
  ),
  s = t.value(
    2,
    (t, e) => a(t[0], e),
    () => t.inChild(0, a),
  ),
  l = t.value(
    1,
    (t, e) => s(t, e[0]),
    () => s,
  ),
  c = (t) => {
    t[0];
  },
  d = t.register(
    "b1",
    t.createRenderer(
      "<div> </div><span> </span><p> </p>",
      "/D lD lD l&",
      c,
      () => [i],
      void 0,
      () => l,
    ),
  ),
  u = t.loopOf(2, d),
  m = t.effect("b2", (e) =>
    t.on(
      e[0],
      "click",
      ((t) => {
        const { 3: e } = t;
        return function () {
          f(t, e.length ? e.slice(0, -1) : [1, 2, 3]);
        };
      })(e),
    ),
  ),
  f = t.state(
    3,
    (t, e) => {
      m(t), u(t, [e]);
    },
    () => u,
  );
e();
