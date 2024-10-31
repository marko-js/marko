// size: 1508 (min) 611 (brotli)

import {
  register as n,
  getAbortSignal as t,
  value as o,
  data as c,
  intersection as i,
  resetAbortSignal as r,
  queueEffect as u,
  createRenderer as l,
  registerSubscriber as d,
  dynamicClosure as e,
  on as b,
  inChild as s,
  conditional as $,
  closure as _,
  queueSource as m,
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
    r(n, 0), u(n, D);
  }),
  g = o(4, null, () => M),
  y = o(
    3,
    (n, t) => c(n[0], t),
    () => M,
  );
n(
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
  I = n(
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
  h = n(
    "b3",
    l(
      `<div>${k}<!></div>`,
      `D/${p}&%`,
      (n) => {
        n[0], y(n[0], "Middle");
      },
      () => [T, O],
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
  x = n(
    "b4",
    l(
      `<div>${k}<!></div>`,
      `D/${p}&%`,
      (n) => {
        n[0], y(n[0], "Outer");
      },
      () => [w, q],
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
          m(n, B, !t);
        };
      })(n),
    ),
  ),
  B = o(
    7,
    (n, t) => u(n, A),
    () => v(7),
  ),
  C = n("b6", (n) =>
    b(
      n[1],
      "click",
      ((n) => {
        const { 6: t } = n;
        return function () {
          m(n, E, !t);
        };
      })(n),
    ),
  ),
  E = o(
    6,
    (n, t) => u(n, C),
    () => f(w, 4),
  ),
  F = n("b7", (n) =>
    b(
      n[0],
      "click",
      ((n) => {
        const { 5: t } = n;
        return function () {
          m(n, G, !t);
        };
      })(n),
    ),
  ),
  G = o(
    5,
    (n, t) => {
      u(n, F), z(n, t ? x : null);
    },
    () => z,
  );
a();
