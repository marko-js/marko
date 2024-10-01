// size: 1061 (min) 580 (brotli)

import {
  intersection as n,
  inChild as t,
  registerRenderer as o,
  createRenderer as l,
  register as m,
  on as c,
  value as i,
  attr as u,
  inConditionalScope as s,
  data as a,
  intersections as d,
  inLoopScope as e,
  closure as r,
  conditional as p,
  queueSource as v,
  queueEffect as b,
  loopOf as h,
  init as f,
} from "@marko/runtime-tags/dom";
const k = n(
    2,
    (n) => {
      const {
        _: { 6: t, 8: o },
      } = n;
      C(n[0], { comments: t.comments, path: o });
    },
    t(0, C),
  ),
  $ = r(8, null, void 0, k),
  _ = r(6, null, void 0, k),
  g = o(
    "a0",
    l(
      "<ul></ul>",
      "/ b&",
      (n) => {
        n[0];
      },
      [_, $],
    ),
  ),
  x = n(
    2,
    (n) => {
      const {
        _: { 2: t },
        7: o,
      } = n;
      q(n, `${t.path || "c"}-${o}`);
    },
    q,
  ),
  D = p(4),
  E = m("a1", (n) =>
    c(
      n[2],
      "click",
      ((n) => {
        const { 9: t } = n;
        return function () {
          v(n, j, !t);
        };
      })(n),
    ),
  ),
  j = i(9, (n, t) => {
    u(n[0], "hidden", !t), a(n[3], t ? "[-]" : "[+]"), b(n, E);
  }),
  q = i(8, (n, t) => u(n[0], "id", t), s($, 4)),
  w = i(7, null, x),
  y = i(
    6,
    (n, t) => {
      a(n[1], t.text), D(n, t.comments ? g : null);
    },
    d([D, s(_, 4)]),
  ),
  z = i(
    5,
    (n, t) => {
      y(n, t[0]), w(n, t[1]);
    },
    d([y, w]),
  ),
  A = r(2, null, void 0, x),
  B = h(
    0,
    o(
      "a2",
      l(
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
  C = i(2, (n, t) => B(n, [t.comments]), d([B, e(A, 0)]));
t(0, C), f();
