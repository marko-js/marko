import {
  r as s,
  a as n,
  c as a,
  o,
  q as t,
  b as l,
  v as i,
  d as c,
  e as u,
  f as m,
  i as d,
  g as e,
  h as r,
  j as v,
  k as b,
  l as f,
  m as p,
  n as $,
} from "./runtime-BM4ksAZA.js";
const h = "<ul></ul>",
  k = d(
    2,
    (s) => {
      const {
        _: { 6: n, 8: a },
      } = s;
      I(s[0], { comments: n.comments, path: a });
    },
    () => f(0, I),
  ),
  K = l(8, null, void 0, () => k),
  T = l(6, null, void 0, () => k),
  _ = s(
    "QURHKITf",
    a(
      `${h}`,
      "/ b&",
      (s) => {
        s[0];
      },
      () => [T, K],
    ),
  ),
  j = d(
    2,
    (s) => {
      const {
        _: { 2: n },
        7: a,
      } = s;
      Z(s, `${n.path || "c"}-${a}`);
    },
    () => Z,
  ),
  E = r(4),
  F = n("ZcKJNKFe", (s) =>
    o(
      s[2],
      "click",
      ((s) => {
        const { 9: n } = s;
        return function () {
          t(s, U, !n);
        };
      })(s),
    ),
  ),
  U = i(9, (s, n) => {
    c(s[0], "hidden", !n), u(s[3], n ? "[-]" : "[+]"), m(s, F);
  }),
  Z = i(
    8,
    (s, n) => c(s[0], "id", n),
    () => v(K, 4),
  ),
  g = i(7, null, () => j),
  q = i(
    6,
    (s, n) => {
      u(s[1], n.text), E(s, n.comments ? _ : null);
    },
    () => e([E, v(T, 4)]),
  ),
  x = i(
    5,
    (s, n) => {
      q(s, n[0]), g(s, n[1]);
    },
    () => e([q, g]),
  ),
  D = l(2, null, void 0, () => j),
  H = p(
    0,
    s(
      "$F_EaYZk",
      a(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (s) => {
          U(s, !0);
        },
        () => [D],
        void 0,
        () => x,
      ),
    ),
  ),
  I = i(
    2,
    (s, n) => H(s, [n.comments]),
    () => e([H, b(D, 0)]),
  ),
  J = `${h}`,
  N = i(
    2,
    (s, n) => I(s[0], n),
    () => f(0, I),
  ),
  Q = i(
    1,
    (s, n) => N(s, n[0]),
    () => N,
  );
function R(s) {
  s[0];
}
$(
  a(J, "/ b&", R, void 0, void 0, () => Q),
  "rUbTinTf",
).mount();
