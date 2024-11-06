// size: 873 (min) 432 (brotli)

import * as e from "@marko/runtime-tags/dom";
import { init as t } from "@marko/runtime-tags/dom";
const n = e.effect("a0", (t) => {
    const { 3: n, 4: o } = t;
    o(`mounted ${n}`),
      (e.getAbortSignal(t, 0).onabort = ((e) => {
        const { 3: t, 4: n } = e;
        return () => {
          n(`destroyed ${t}`);
        };
      })(t));
  }),
  o = e.intersection(2, (t) => {
    e.resetAbortSignal(t, 0), n(t);
  }),
  r = e.value(4, null, () => o),
  i = e.value(
    3,
    (t, n) => e.data(t[0], n),
    () => o,
  );
e.register(
  "b0",
  (e) =>
    function (t) {
      e[1].innerHTML += "\n" + t;
    },
);
const a = e.closure(
    4,
    (e, t) => r(e[0], t),
    void 0,
    () => e.inChild(0, r),
  ),
  l = e.value(
    2,
    (e, t) => i(e[0], t),
    () => e.inChild(0, i),
  ),
  s = e.value(
    1,
    (e, t) => l(e, t[0]),
    () => l,
  ),
  c = (e) => {
    e[0];
  },
  d = e.register(
    "b1",
    e.createRenderer(
      "<div> </div>",
      "/D l&",
      c,
      () => [a],
      void 0,
      () => s,
    ),
  ),
  u = e.loopOf(2, d),
  m = e.effect("b2", (t) =>
    e.on(
      t[0],
      "click",
      ((e) => {
        const { 3: t } = e;
        return function () {
          f(e, t.length ? t.slice(0, -1) : [1, 2, 3]);
        };
      })(t),
    ),
  ),
  f = e.state(
    3,
    (e, t) => {
      m(e), u(e, [t]);
    },
    () => u,
  );
t();
