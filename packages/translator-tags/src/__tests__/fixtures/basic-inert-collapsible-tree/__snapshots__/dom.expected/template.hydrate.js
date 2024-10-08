// size: 1132 (min) 582 (brotli)

import {
  registerRenderer as n,
  createRenderer as t,
  register as o,
  on as l,
  closure as m,
  queueSource as c,
  value as i,
  attr as u,
  data as s,
  queueEffect as a,
  intersections as d,
  intersection as e,
  inChild as r,
  inConditionalScope as p,
  inLoopScope as v,
  conditional as b,
  loopOf as h,
  init as f,
} from "@marko/runtime-tags/dom";
const k = e(
    2,
    (n) => {
      const {
        _: { 6: t, 8: o },
      } = n;
      C(n[0], { comments: t.comments, path: o });
    },
    () => r(0, C),
  ),
  $ = m(8, null, void 0, () => k),
  _ = m(6, null, void 0, () => k),
  g = n(
    "a0",
    t(
      "<ul></ul>",
      "/ b&",
      (n) => {
        n[0];
      },
      () => [_, $],
    ),
  ),
  x = e(
    2,
    (n) => {
      const {
        _: { 2: t },
        7: o,
      } = n;
      q(n, `${t.path || "c"}-${o}`);
    },
    () => q,
  ),
  D = b(4),
  E = o("a1", (n) =>
    l(
      n[2],
      "click",
      ((n) => {
        const { 9: t } = n;
        return function () {
          c(n, j, !t);
        };
      })(n),
    ),
  ),
  j = i(9, (n, t) => {
    u(n[0], "hidden", !t), s(n[3], t ? "[-]" : "[+]"), a(n, E);
  }),
  q = i(
    8,
    (n, t) => u(n[0], "id", t),
    () => p($, 4),
  ),
  w = i(7, null, () => x),
  y = i(
    6,
    (n, t) => {
      s(n[1], t.text), D(n, t.comments ? g : null);
    },
    () => d([D, p(_, 4)]),
  ),
  z = i(
    5,
    (n, t) => {
      y(n, t[0]), w(n, t[1]);
    },
    () => d([y, w]),
  ),
  A = m(2, null, void 0, () => x),
  B = h(
    0,
    n(
      "a2",
      t(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (n) => {
          j(n, !0);
        },
        () => [A],
        void 0,
        () => z,
      ),
    ),
  ),
  C = i(
    2,
    (n, t) => B(n, [t.comments]),
    () => d([B, v(A, 0)]),
  );
f();
