import {
  r as s,
  c as n,
  a,
  o as t,
  b as l,
  v as o,
  q as i,
  d as c,
  e as u,
  i as m,
  f as e,
  g as d,
  h as r,
  j as b,
  k as f,
  l as h,
  m as p,
} from "./runtime-CcsLIbdY.js";
const v = e(2, (s) => {
    const {
      _: { 6: n, 8: a },
    } = s;
    L(s[0], { comments: n.comments, path: a });
  }),
  $ = l(8, null, void 0, v),
  k = l(6, null, void 0, v),
  _ = s(
    "iNEDrGLk",
    n(
      `${N}`,
      `/${V}&`,
      (s) => {
        W(s[0]);
      },
      [k, $],
    ),
  ),
  j = e(2, (s) => {
    const {
      _: { 2: n },
      7: a,
    } = s;
    g(s, `${n.path || "c"}-${a}`);
  }),
  D = r(4),
  E = a("W_tYlrVh", (s) =>
    t(
      s[2],
      "click",
      ((s) => {
        const { 9: n } = s;
        return function () {
          i(s, F, !n);
        };
      })(s),
    ),
  ),
  F = o(9, (s, n) => {
    c(s[0], "hidden", !n), u(s[3], n ? "[-]" : "[+]"), b(s, E);
  }),
  g = o(8, (s, n) => c(s[0], "id", n), d($, 4)),
  q = o(7, null, j),
  x = o(
    6,
    (s, n) => {
      u(s[1], n.text), D(s, n.comments ? _ : null);
    },
    m([D, d(k, 4)]),
  ),
  A = o(
    5,
    (s, n) => {
      x(s, n[0]), q(s, n[1]);
    },
    m([x, q]),
  ),
  G = l(2, null, void 0, j),
  J = h(
    0,
    s(
      "JaAFZfFb",
      n(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (s) => {
          F(s, !0);
        },
        [G],
        void 0,
        A,
      ),
    ),
  ),
  L = o(2, (s, n) => J(s, [n.comments]), m([J, f(G, 0)])),
  N = "<ul></ul>",
  V = " b",
  W = function () {};
p();
