// size: 1596 (min) 661 (brotli)

import {
  register as n,
  getAbortSignal as t,
  value as o,
  data as i,
  intersection as c,
  resetAbortSignal as r,
  queueEffect as l,
  registerRenderer as u,
  createRenderer as d,
  registerSubscriber as e,
  dynamicClosure as s,
  on as a,
  inChild as b,
  conditional as v,
  closure as $,
  queueSource as _,
  dynamicSubscribers as m,
  inConditionalScope as f,
  init as p,
} from "@marko/runtime-tags/dom";
const D = "<div><!> a</div><span><!> a</span><p><!> a</p>",
  k = "D%lD%lD%l",
  M = n("a0", (n) => {
    const { 5: o, 6: i } = n;
    i(`${o} mounted`),
      (t(n, 0).onabort = ((n) => {
        const { 5: t, 6: o } = n;
        return () => {
          o(`${t} destroyed`);
        };
      })(n));
  }),
  g = c(2, (n) => {
    r(n, 0), l(n, M);
  }),
  y = o(6, null, () => g),
  H = o(
    5,
    (n, t) => {
      i(n[0], t), i(n[1], t), i(n[2], t);
    },
    () => g,
  );
n(
  "b0",
  (n) =>
    function (t) {
      n[3].innerHTML += "\n" + t;
    },
);
const I = s(
    8,
    (n, t) => y(n[0], t),
    (n) => n._._._,
    () => b(0, y),
  ),
  L = u(
    "b1",
    d(
      `${D}`,
      `/${k}&`,
      (n) => {
        n[0], H(n[0], "Inner");
      },
      () => [I],
    ),
  ),
  O = v(1),
  T = s(
    8,
    (n, t) => y(n[0], t),
    (n) => n._._,
    () => b(0, y),
  ),
  h = e(
    "b2",
    s(
      7,
      (n, t) => O(n, t ? L : null),
      (n) => n._._,
      () => O,
    ),
  ),
  j = u(
    "b3",
    d(
      `<div>${D}<!></div>`,
      `D/${k}&%`,
      (n) => {
        n[0], H(n[0], "Middle");
      },
      () => [T, h],
    ),
  ),
  q = v(1),
  w = $(
    8,
    (n, t) => y(n[0], t),
    void 0,
    () => b(0, y),
  ),
  x = $(
    6,
    (n, t) => q(n, t ? j : null),
    void 0,
    () => q,
  ),
  z = u(
    "b4",
    d(
      `<div>${D}<!></div>`,
      `D/${k}&%`,
      (n) => {
        n[0], H(n[0], "Outer");
      },
      () => [w, x],
    ),
  ),
  A = v(4),
  B = n("b5", (n) =>
    a(
      n[2],
      "click",
      ((n) => {
        const { 7: t } = n;
        return function () {
          _(n, C, !t);
        };
      })(n),
    ),
  ),
  C = o(
    7,
    (n, t) => l(n, B),
    () => m(7),
  ),
  E = n("b6", (n) =>
    a(
      n[1],
      "click",
      ((n) => {
        const { 6: t } = n;
        return function () {
          _(n, F, !t);
        };
      })(n),
    ),
  ),
  F = o(
    6,
    (n, t) => l(n, E),
    () => f(x, 4),
  ),
  G = n("b7", (n) =>
    a(
      n[0],
      "click",
      ((n) => {
        const { 5: t } = n;
        return function () {
          _(n, J, !t);
        };
      })(n),
    ),
  ),
  J = o(
    5,
    (n, t) => {
      l(n, G), A(n, t ? z : null);
    },
    () => A,
  );
p();
