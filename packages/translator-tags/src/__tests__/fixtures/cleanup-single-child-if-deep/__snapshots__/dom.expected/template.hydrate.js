// size: 1483 (min) 604 (brotli)

import {
  effect as n,
  getAbortSignal as t,
  value as o,
  data as c,
  intersection as i,
  resetAbortSignal as r,
  register as u,
  createRenderer as l,
  registerSubscriber as d,
  dynamicClosure as e,
  on as b,
  inChild as s,
  conditional as $,
  closure as _,
  state as m,
  dynamicSubscribers as v,
  inConditionalScope as f,
  init as a,
} from "@marko/runtime-tags/dom";
const k = "<p> </p>",
  p = "D l",
  D = n("a0", (n) => {
    const { 3: o, 4: c } = n;
    c(`${o} mounted`),
      (t(n, 0).onabort = ((n) => {
        const { 3: t, 4: o } = n;
        return () => {
          o(`${t} destroyed`);
        };
      })(n));
  }),
  M = i(2, (n) => {
    r(n, 0), D(n);
  }),
  g = o(4, null, () => M),
  y = o(
    3,
    (n, t) => c(n[0], t),
    () => M,
  );
u(
  "b0",
  (n) =>
    function (t) {
      n[3].innerHTML += "\n" + t;
    },
);
const H = e(
    8,
    (n, t) => g(n[0], t),
    (n) => n._._._,
    () => s(0, g),
  ),
  I = u(
    "b1",
    l(
      `${k}`,
      `/${p}&`,
      (n) => {
        n[0], y(n[0], "Inner");
      },
      () => [H],
    ),
  ),
  L = $(1),
  O = e(
    8,
    (n, t) => g(n[0], t),
    (n) => n._._,
    () => s(0, g),
  ),
  T = d(
    "b2",
    e(
      7,
      (n, t) => L(n, t ? I : null),
      (n) => n._._,
      () => L,
    ),
  ),
  h = u(
    "b3",
    l(
      `<div>${k}<!></div>`,
      `D/${p}&%`,
      (n) => {
        n[0], y(n[0], "Middle");
      },
      () => [O, T],
    ),
  ),
  j = $(1),
  q = _(
    8,
    (n, t) => g(n[0], t),
    void 0,
    () => s(0, g),
  ),
  w = _(
    6,
    (n, t) => j(n, t ? h : null),
    void 0,
    () => j,
  ),
  x = u(
    "b4",
    l(
      `<div>${k}<!></div>`,
      `D/${p}&%`,
      (n) => {
        n[0], y(n[0], "Outer");
      },
      () => [q, w],
    ),
  ),
  z = $(4),
  A = n("b5", (n) =>
    b(
      n[2],
      "click",
      ((n) => {
        const { 7: t } = n;
        return function () {
          B(n, !t);
        };
      })(n),
    ),
  ),
  B = m(
    7,
    (n, t) => A(n),
    () => v(7),
  ),
  C = n("b6", (n) =>
    b(
      n[1],
      "click",
      ((n) => {
        const { 6: t } = n;
        return function () {
          E(n, !t);
        };
      })(n),
    ),
  ),
  E = m(
    6,
    (n, t) => C(n),
    () => f(w, 4),
  ),
  F = n("b7", (n) =>
    b(
      n[0],
      "click",
      ((n) => {
        const { 5: t } = n;
        return function () {
          G(n, !t);
        };
      })(n),
    ),
  ),
  G = m(
    5,
    (n, t) => {
      F(n), z(n, t ? x : null);
    },
    () => z,
  );
a();
