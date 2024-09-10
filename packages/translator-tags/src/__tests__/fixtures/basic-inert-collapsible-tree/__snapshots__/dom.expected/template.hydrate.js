// size: 1052 (min) 574 (brotli)

import {
  registerRenderer as n,
  createRenderer as t,
  register as o,
  on as l,
  value as m,
  attr as c,
  inConditionalScope as i,
  data as u,
  intersections as s,
  inLoopScope as a,
  closure as d,
  conditional as e,
  queueSource as r,
  queueEffect as p,
  loopOf as v,
  intersection as b,
  inChild as h,
  init as f,
} from "@marko/runtime-tags/dom";
const k = b(2, (n) => {
    const {
      _: { 6: t, 8: o },
    } = n;
    C(n[0], { comments: t.comments, path: o });
  }),
  $ = d(8, null, void 0, k),
  _ = d(6, null, void 0, k),
  g = n(
    "a0",
    t(
      "<ul></ul>",
      "/ b&",
      (n) => {
        n[0];
      },
      [_, $],
    ),
  ),
  x = b(2, (n) => {
    const {
      _: { 2: t },
      7: o,
    } = n;
    q(n, `${t.path || "c"}-${o}`);
  }),
  D = e(4),
  E = o("a1", (n) =>
    l(
      n[2],
      "click",
      ((n) => {
        const { 9: t } = n;
        return function () {
          r(n, j, !t);
        };
      })(n),
    ),
  ),
  j = m(9, (n, t) => {
    c(n[0], "hidden", !t), u(n[3], t ? "[-]" : "[+]"), p(n, E);
  }),
  q = m(8, (n, t) => c(n[0], "id", t), i($, 4)),
  w = m(7, null, x),
  y = m(
    6,
    (n, t) => {
      u(n[1], t.text), D(n, t.comments ? g : null);
    },
    s([D, i(_, 4)]),
  ),
  z = m(
    5,
    (n, t) => {
      y(n, t[0]), w(n, t[1]);
    },
    s([y, w]),
  ),
  A = d(2, null, void 0, x),
  B = v(
    0,
    n(
      "a2",
      t(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (n) => {
          j(n, !0);
        },
        [A],
        void 0,
        z,
      ),
    ),
  ),
  C = m(2, (n, t) => B(n, [t.comments]), s([B, a(A, 0)]));
h(0, C), f();
