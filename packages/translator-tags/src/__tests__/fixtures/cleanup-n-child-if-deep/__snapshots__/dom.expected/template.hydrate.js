// size: 1705 (min) 611 (brotli)

import * as e from "@marko/runtime-tags/dom";
import { init as n } from "@marko/runtime-tags/dom";
const t = "<div><!> a</div><span><!> a</span><p><!> a</p>",
  r = "D%lD%lD%l",
  i = e.effect("a0", (n) => {
    const { 5: t, 6: r } = n;
    r(`${t} mounted`),
      (e.getAbortSignal(n, 0).onabort = ((e) => {
        const { 5: n, 6: t } = e;
        return () => {
          t(`${n} destroyed`);
        };
      })(n));
  }),
  o = e.intersection(2, (n) => {
    e.resetAbortSignal(n, 0), i(n);
  }),
  c = e.value(6, 0, () => o),
  a = e.value(
    5,
    (n, t) => {
      e.data(n[0], t), e.data(n[1], t), e.data(n[2], t);
    },
    () => o,
  );
e.register(
  "b0",
  (e) =>
    function (n) {
      e[3].innerHTML += "\n" + n;
    },
);
const d = e.dynamicClosure(
    8,
    (e, n) => c(e[0], n),
    (e) => e._._._,
    () => e.inChild(0, c),
  ),
  s = (e) => {
    e[0], a(e[0], "Inner");
  },
  l = e.register(
    "b1",
    e.createRenderer(`${t}`, `/${r}&`, s, () => [d]),
  ),
  u = e.conditional(1, 0),
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
      (e, n) => u(e, n ? l : null),
      (e) => e._._,
      () => u,
    ),
  ),
  f = (e) => {
    e[0], a(e[0], "Middle");
  },
  g = e.register(
    "b3",
    e.createRenderer(`<div>${t}<!></div>`, `D/${r}&%`, f, () => [b, m]),
  ),
  v = e.conditional(1, 0),
  $ = e.closure(
    8,
    (e, n) => c(e[0], n),
    void 0,
    () => e.inChild(0, c),
  ),
  p = e.closure(
    6,
    (e, n) => v(e, n ? g : null),
    void 0,
    () => v,
  ),
  C = (e) => {
    e[0], a(e[0], "Outer");
  },
  _ = e.register(
    "b4",
    e.createRenderer(`<div>${t}<!></div>`, `D/${r}&%`, C, () => [$, p]),
  ),
  k = e.conditional(4, 0),
  y = e.effect("b5", (n) =>
    e.on(
      n[2],
      "click",
      ((e) => {
        const { 7: n } = e;
        return function () {
          D(e, !n);
        };
      })(n),
    ),
  ),
  D = e.state(
    7,
    (e, n) => y(e),
    () => e.dynamicSubscribers(7),
  ),
  S = e.effect("b6", (n) =>
    e.on(
      n[1],
      "click",
      ((e) => {
        const { 6: n } = e;
        return function () {
          h(e, !n);
        };
      })(n),
    ),
  ),
  h = e.state(
    6,
    (e, n) => S(e),
    () => e.inConditionalScope(p, 4),
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
      R(e), k(e, n ? _ : null);
    },
    () => k,
  );
n();
