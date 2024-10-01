// size: 1530 (min) 625 (brotli)

import {
  register as n,
  getAbortSignal as t,
  value as o,
  data as c,
  intersection as i,
  resetAbortSignal as r,
  queueEffect as u,
  registerRenderer as l,
  createRenderer as d,
  registerSubscriber as e,
  dynamicClosure as b,
  on as s,
  inChild as $,
  conditional as _,
  closure as m,
  queueSource as v,
  dynamicSubscribers as f,
  inConditionalScope as a,
  init as k,
} from "@marko/runtime-tags/dom";
const p = "<p> </p>",
  D = "D l",
  M = n("a0", (n) => {
    const { 3: o, 4: c } = n;
    c(`${o} mounted`),
      (t(n, 0).onabort = ((n) => {
        const { 3: t, 4: o } = n;
        return () => {
          o(`${t} destroyed`);
        };
      })(n));
  }),
  g = i(2, (n) => {
    r(n, 0), u(n, M);
  }),
  y = o(4, null, () => g),
  H = o(
    3,
    (n, t) => c(n[0], t),
    () => g,
  );
n(
  "b0",
  (n) =>
    function (t) {
      n[3].innerHTML += "\n" + t;
    },
);
const I = b(
    8,
    (n, t) => y(n[0], t),
    (n) => n._._._,
    () => $(0, y),
  ),
  L = l(
    "b1",
    d(
      `${p}`,
      `/${D}&`,
      (n) => {
        n[0], H(n[0], "Inner");
      },
      () => [I],
    ),
  ),
  O = _(1),
  T = b(
    8,
    (n, t) => y(n[0], t),
    (n) => n._._,
    () => $(0, y),
  ),
  h = e(
    "b2",
    b(
      7,
      (n, t) => O(n, t ? L : null),
      (n) => n._._,
      () => O,
    ),
  ),
  j = l(
    "b3",
    d(
      `<div>${p}<!></div>`,
      `D/${D}&%`,
      (n) => {
        n[0], H(n[0], "Middle");
      },
      () => [T, h],
    ),
  ),
  q = _(1),
  w = m(
    8,
    (n, t) => y(n[0], t),
    void 0,
    () => $(0, y),
  ),
  x = m(
    6,
    (n, t) => q(n, t ? j : null),
    void 0,
    () => q,
  ),
  z = l(
    "b4",
    d(
      `<div>${p}<!></div>`,
      `D/${D}&%`,
      (n) => {
        n[0], H(n[0], "Outer");
      },
      () => [w, x],
    ),
  ),
  A = _(4),
  B = n("b5", (n) =>
    s(
      n[2],
      "click",
      ((n) => {
        const { 7: t } = n;
        return function () {
          v(n, C, !t);
        };
      })(n),
    ),
  ),
  C = o(
    7,
    (n, t) => u(n, B),
    () => f(7),
  ),
  E = n("b6", (n) =>
    s(
      n[1],
      "click",
      ((n) => {
        const { 6: t } = n;
        return function () {
          v(n, F, !t);
        };
      })(n),
    ),
  ),
  F = o(
    6,
    (n, t) => u(n, E),
    () => a(x, 4),
  ),
  G = n("b7", (n) =>
    s(
      n[0],
      "click",
      ((n) => {
        const { 5: t } = n;
        return function () {
          v(n, J, !t);
        };
      })(n),
    ),
  ),
  J = o(
    5,
    (n, t) => {
      u(n, G), A(n, t ? z : null);
    },
    () => A,
  );
k();
