// size: 1557 (min) 655 (brotli)

import {
  register as n,
  getAbortSignal as t,
  value as o,
  intersections as i,
  data as c,
  intersection as r,
  resetAbortSignal as l,
  queueEffect as u,
  dynamicClosure as d,
  inChild as e,
  registerRenderer as s,
  createRenderer as a,
  registerSubscriber as b,
  closure as v,
  inConditionalScope as $,
  dynamicSubscribers as _,
  on as m,
  conditional as f,
  queueSource as p,
  init as D,
} from "@marko/runtime-tags/dom";
const k = "<div><!> a</div><span><!> a</span><p><!> a</p>",
  M = "D%lD%lD%l",
  g = n("a0", (n) => {
    const { 5: o, 6: i } = n;
    i(`${o} mounted`),
      (t(n, 0).onabort = ((n) => {
        const { 5: t, 6: o } = n;
        return () => {
          o(`${t} destroyed`);
        };
      })(n));
  }),
  y = r(2, (n) => {
    l(n, 0), u(n, g);
  }),
  H = o(6, null, y),
  I = o(
    5,
    (n, t) => {
      c(n[0], t), c(n[1], t), c(n[2], t);
    },
    y,
  );
i([I, H]),
  n(
    "b0",
    (n) =>
      function (t) {
        n[3].innerHTML += "\n" + t;
      },
  );
const L = s(
    "b1",
    a(
      `${k}`,
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
  O = f(1),
  T = s(
    "b3",
    a(
      `<div>${k}<!></div>`,
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
        b(
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
  h = f(1),
  j = v(8, (n, t) => H(n[0], t), void 0, e(0, H)),
  q = v(6, (n, t) => h(n, t ? T : null), void 0, h),
  w = s(
    "b4",
    a(
      `<div>${k}<!></div>`,
      `D/${M}&%`,
      (n) => {
        n[0], I(n[0], "Outer");
      },
      [j, q],
    ),
  ),
  x = f(4);
i([$(j, 4), _(8)]);
const z = n("b5", (n) =>
    m(
      n[2],
      "click",
      ((n) => {
        const { 7: t } = n;
        return function () {
          p(n, A, !t);
        };
      })(n),
    ),
  ),
  A = o(7, (n, t) => u(n, z), _(7)),
  B = n("b6", (n) =>
    m(
      n[1],
      "click",
      ((n) => {
        const { 6: t } = n;
        return function () {
          p(n, C, !t);
        };
      })(n),
    ),
  ),
  C = o(6, (n, t) => u(n, B), $(q, 4)),
  E = n("b7", (n) =>
    m(
      n[0],
      "click",
      ((n) => {
        const { 5: t } = n;
        return function () {
          p(n, F, !t);
        };
      })(n),
    ),
  ),
  F = o(
    5,
    (n, t) => {
      u(n, E), x(n, t ? w : null);
    },
    x,
  );
D();
