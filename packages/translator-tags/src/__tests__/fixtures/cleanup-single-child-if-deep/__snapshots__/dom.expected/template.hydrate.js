// size: 1626 (min) 596 (brotli)

import * as e from "@marko/runtime-tags/dom";
import { init as n } from "@marko/runtime-tags/dom";
const t = "<p> </p>",
  r = "D l",
  i = e.effect("a0", (n) => {
    const { 3: t, 4: r } = n;
    r(`${t} mounted`),
      (e.getAbortSignal(n, 0).onabort = ((e) => {
        const { 3: n, 4: t } = e;
        return () => {
          t(`${n} destroyed`);
        };
      })(n));
  }),
  o = e.intersection(2, (n) => {
    e.resetAbortSignal(n, 0), i(n);
  }),
  c = e.value(4, null, () => o),
  l = e.value(
    3,
    (n, t) => e.data(n[0], t),
    () => o,
  );
e.register(
  "b0",
  (e) =>
    function (n) {
      e[3].innerHTML += "\n" + n;
    },
);
const s = e.dynamicClosure(
    8,
    (e, n) => c(e[0], n),
    (e) => e._._._,
    () => e.inChild(0, c),
  ),
  d = (e) => {
    e[0], l(e[0], "Inner");
  },
  a = e.register(
    "b1",
    e.createRenderer(`${t}`, `/${r}&`, d, () => [s]),
  ),
  u = e.conditional(1),
  b = e.dynamicClosure(
    8,
    (e, n) => c(e[0], n),
    (e) => e._._,
    () => e.inChild(0, c),
  ),
  m = e.registerSubscriber(
    "b2",
    e.dynamicClosure(
      7,
      (e, n) => u(e, n ? a : null),
      (e) => e._._,
      () => u,
    ),
  ),
  f = (e) => {
    e[0], l(e[0], "Middle");
  },
  g = e.register(
    "b3",
    e.createRenderer(`<div>${t}<!></div>`, `D/${r}&%`, f, () => [b, m]),
  ),
  v = e.conditional(1),
  $ = e.closure(
    8,
    (e, n) => c(e[0], n),
    void 0,
    () => e.inChild(0, c),
  ),
  C = e.closure(
    6,
    (e, n) => v(e, n ? g : null),
    void 0,
    () => v,
  ),
  _ = (e) => {
    e[0], l(e[0], "Outer");
  },
  k = e.register(
    "b4",
    e.createRenderer(`<div>${t}<!></div>`, `D/${r}&%`, _, () => [$, C]),
  ),
  p = e.conditional(4),
  y = e.effect("b5", (n) =>
    e.on(
      n[2],
      "click",
      ((e) => {
        const { 7: n } = e;
        return function () {
          S(e, !n);
        };
      })(n),
    ),
  ),
  S = e.state(
    7,
    (e, n) => y(e),
    () => e.dynamicSubscribers(7),
  ),
  h = e.effect("b6", (n) =>
    e.on(
      n[1],
      "click",
      ((e) => {
        const { 6: n } = e;
        return function () {
          D(e, !n);
        };
      })(n),
    ),
  ),
  D = e.state(
    6,
    (e, n) => h(e),
    () => e.inConditionalScope(C, 4),
  ),
  R = e.effect("b7", (n) =>
    e.on(
      n[0],
      "click",
      ((e) => {
        const { 5: n } = e;
        return function () {
          A(e, !n);
        };
      })(n),
    ),
  ),
  A = e.state(
    5,
    (e, n) => {
      R(e), p(e, n ? k : null);
    },
    () => p,
  );
n();
