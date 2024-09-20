// size: 1491 (min) 633 (brotli)

import {
  register as n,
  getAbortSignal as t,
  value as o,
  intersections as c,
  data as i,
  intersection as r,
  resetAbortSignal as u,
  queueEffect as l,
  dynamicClosure as d,
  inChild as e,
  registerRenderer as s,
  createRenderer as b,
  registerSubscriber as $,
  closure as _,
  inConditionalScope as m,
  dynamicSubscribers as v,
  on as f,
  conditional as a,
  queueSource as k,
  init as p,
} from "@marko/runtime-tags/dom";
const D = "<p> </p>",
  M = "D l",
  g = n("a0", (n) => {
    const { 3: o, 4: c } = n;
    c(`${o} mounted`),
      (t(n, 0).onabort = ((n) => {
        const { 3: t, 4: o } = n;
        return () => {
          o(`${t} destroyed`);
        };
      })(n));
  }),
  y = r(2, (n) => {
    u(n, 0), l(n, g);
  }),
  H = o(4, null, y),
  I = o(3, (n, t) => i(n[0], t), y);
c([I, H]),
  n(
    "b0",
    (n) =>
      function (t) {
        n[3].innerHTML += "\n" + t;
      },
  );
const L = s(
    "b1",
    b(
      `${D}`,
      `/${M}&`,
      (n) => {
        n[0], I(n[0], "Inner");
      },
      [
        d(
          8,
          (n, t) => H(n[0], t),
          (n) => n._._._,
          e(0, H),
        ),
      ],
    ),
  ),
  O = a(1),
  T = s(
    "b3",
    b(
      `<div>${D}<!></div>`,
      `D/${M}&%`,
      (n) => {
        n[0], I(n[0], "Middle");
      },
      [
        d(
          8,
          (n, t) => H(n[0], t),
          (n) => n._._,
          e(0, H),
        ),
        $(
          "b2",
          d(
            7,
            (n, t) => O(n, t ? L : null),
            (n) => n._._,
            O,
          ),
        ),
      ],
    ),
  ),
  h = a(1),
  j = _(8, (n, t) => H(n[0], t), void 0, e(0, H)),
  q = _(6, (n, t) => h(n, t ? T : null), void 0, h),
  w = s(
    "b4",
    b(
      `<div>${D}<!></div>`,
      `D/${M}&%`,
      (n) => {
        n[0], I(n[0], "Outer");
      },
      [j, q],
    ),
  ),
  x = a(4);
c([m(j, 4), v(8)]);
const z = n("b5", (n) =>
    f(
      n[2],
      "click",
      ((n) => {
        const { 7: t } = n;
        return function () {
          k(n, A, !t);
        };
      })(n),
    ),
  ),
  A = o(7, (n, t) => l(n, z), v(7)),
  B = n("b6", (n) =>
    f(
      n[1],
      "click",
      ((n) => {
        const { 6: t } = n;
        return function () {
          k(n, C, !t);
        };
      })(n),
    ),
  ),
  C = o(6, (n, t) => l(n, B), m(q, 4)),
  E = n("b7", (n) =>
    f(
      n[0],
      "click",
      ((n) => {
        const { 5: t } = n;
        return function () {
          k(n, F, !t);
        };
      })(n),
    ),
  ),
  F = o(
    5,
    (n, t) => {
      l(n, E), x(n, t ? w : null);
    },
    x,
  );
p();
