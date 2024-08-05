import {
  r as s,
  c as n,
  a,
  o as t,
  b as o,
  v as l,
  q as i,
  d as c,
  e as u,
  f as m,
  i as d,
  g as e,
  h as r,
  j as v,
  k as b,
  l as f,
  m as $,
  n as h,
} from "./runtime-BHYPJMig.js";
const p = e(2, (s) => {
    const {
      _: { 6: n, 8: a },
    } = s;
    L(s[0], { comments: n.comments, path: a });
  }),
  k = o(8, null, void 0, p),
  _ = o(6, null, void 0, p),
  j = s(
    "iNEDrGLk",
    n(
      `${N}`,
      `/${U}&`,
      (s) => {
        V(s[0]);
      },
      [_, k],
    ),
  ),
  D = e(2, (s) => {
    const {
      _: { 2: n },
      7: a,
    } = s;
    g(s, `${n.path || "c"}-${a}`);
  }),
  E = v(4),
  F = a("W_tYlrVh", (s) =>
    t(
      s[2],
      "click",
      ((s) => {
        const { 9: n } = s;
        return function () {
          i(s, T, !n);
        };
      })(s),
    ),
  ),
  T = l(9, (s, n) => {
    c(s[0], "hidden", !n), u(s[3], n ? "[-]" : "[+]"), m(s, F);
  }),
  g = l(8, (s, n) => c(s[0], "id", n), r(k, 4)),
  q = l(7, null, D),
  x = l(
    6,
    (s, n) => {
      u(s[1], n.text), E(s, n.comments ? j : null);
    },
    d([E, r(_, 4)]),
  ),
  A = l(
    5,
    (s, n) => {
      x(s, n[0]), q(s, n[1]);
    },
    d([x, q]),
  ),
  G = o(2, null, void 0, D),
  J = f(
    0,
    s(
      "JaAFZfFb",
      n(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (s) => {
          T(s, !0);
        },
        [G],
        void 0,
        A,
      ),
    ),
  ),
  L = l(2, (s, n) => J(s, [n.comments]), d([J, b(G, 0)])),
  N = "<ul></ul>",
  U = " b",
  V = function () {},
  W = l(2, (s, n) => L(s[0], n), h(0, L));
$(
  n(
    `${N}`,
    `/${U}&`,
    (s) => {
      V(s[0]);
    },
    void 0,
    void 0,
    l(1, (s, n) => W(s, n[0]), W),
  ),
  "rUbTinTf",
).mount();
