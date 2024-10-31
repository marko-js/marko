// size: 1574 (min) 636 (brotli)

import {
  register as n,
  getAbortSignal as t,
  value as o,
  data as i,
  intersection as c,
  resetAbortSignal as r,
  queueEffect as l,
  createRenderer as u,
  registerSubscriber as d,
  dynamicClosure as e,
  on as s,
  inChild as a,
  conditional as b,
  closure as v,
  queueSource as $,
  dynamicSubscribers as _,
  inConditionalScope as m,
  init as f,
} from "@marko/runtime-tags/dom";
const p = "<div><!> a</div><span><!> a</span><p><!> a</p>",
  D = "D%lD%lD%l",
  k = n("a0", (n) => {
    const { 5: o, 6: i } = n;
    i(`${o} mounted`),
      (t(n, 0).onabort = ((n) => {
        const { 5: t, 6: o } = n;
        return () => {
          o(`${t} destroyed`);
        };
      })(n));
  }),
  M = c(2, (n) => {
    r(n, 0), l(n, k);
  }),
  g = o(6, null, () => M),
  y = o(
    5,
    (n, t) => {
      i(n[0], t), i(n[1], t), i(n[2], t);
    },
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
    () => a(0, g),
  ),
  I = n(
    "b1",
    u(
      `${p}`,
      `/${D}&`,
      (n) => {
        n[0], y(n[0], "Inner");
      },
      () => [H],
    ),
  ),
  L = b(1),
  O = e(
    8,
    (n, t) => g(n[0], t),
    (n) => n._._,
    () => a(0, g),
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
    u(
      `<div>${p}<!></div>`,
      `D/${D}&%`,
      (n) => {
        n[0], y(n[0], "Middle");
      },
      () => [O, T],
    ),
  ),
  j = b(1),
  q = v(
    8,
    (n, t) => g(n[0], t),
    void 0,
    () => a(0, g),
  ),
  w = v(
    6,
    (n, t) => j(n, t ? h : null),
    void 0,
    () => j,
  ),
  x = n(
    "b4",
    u(
      `<div>${p}<!></div>`,
      `D/${D}&%`,
      (n) => {
        n[0], y(n[0], "Outer");
      },
      () => [q, w],
    ),
  ),
  z = b(4),
  A = n("b5", (n) =>
    s(
      n[2],
      "click",
      ((n) => {
        const { 7: t } = n;
        return function () {
          $(n, B, !t);
        };
      })(n),
    ),
  ),
  B = o(
    7,
    (n, t) => l(n, A),
    () => _(7),
  ),
  C = n("b6", (n) =>
    s(
      n[1],
      "click",
      ((n) => {
        const { 6: t } = n;
        return function () {
          $(n, E, !t);
        };
      })(n),
    ),
  ),
  E = o(
    6,
    (n, t) => l(n, C),
    () => m(w, 4),
  ),
  F = n("b7", (n) =>
    s(
      n[0],
      "click",
      ((n) => {
        const { 5: t } = n;
        return function () {
          $(n, G, !t);
        };
      })(n),
    ),
  ),
  G = o(
    5,
    (n, t) => {
      l(n, F), z(n, t ? x : null);
    },
    () => z,
  );
f();
