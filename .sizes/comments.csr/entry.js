import {
  r as s,
  a as n,
  c as a,
  o,
  b as t,
  q as l,
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
} from "./runtime-B9FIZhLN.js";
const h = "<ul></ul>",
  k = e(2, (s) => {
    const {
      _: { 6: n, 8: a },
    } = s;
    I(s[0], { comments: n.comments, path: a });
  }),
  K = t(8, null, void 0, k),
  T = t(6, null, void 0, k),
  _ = s(
    "QURHKITf",
    a(
      `${h}`,
      "/ b&",
      (s) => {
        s[0];
      },
      [T, K],
    ),
  ),
  j = e(2, (s) => {
    const {
      _: { 2: n },
      7: a,
    } = s;
    Z(s, `${n.path || "c"}-${a}`);
  }),
  E = v(4),
  F = n("ZcKJNKFe", (s) =>
    o(
      s[2],
      "click",
      ((s) => {
        const { 9: n } = s;
        return function () {
          l(s, U, !n);
        };
      })(s),
    ),
  ),
  U = i(9, (s, n) => {
    c(s[0], "hidden", !n), u(s[3], n ? "[-]" : "[+]"), m(s, F);
  }),
  Z = i(8, (s, n) => c(s[0], "id", n), r(K, 4)),
  g = i(7, null, j),
  q = i(
    6,
    (s, n) => {
      u(s[1], n.text), E(s, n.comments ? _ : null);
    },
    d([E, r(T, 4)]),
  ),
  x = i(
    5,
    (s, n) => {
      q(s, n[0]), g(s, n[1]);
    },
    d([q, g]),
  ),
  D = t(2, null, void 0, j),
  H = f(
    0,
    s(
      "$F_EaYZk",
      a(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (s) => {
          U(s, !0);
        },
        [D],
        void 0,
        x,
      ),
    ),
  ),
  I = i(2, (s, n) => H(s, [n.comments]), d([H, b(D, 0)])),
  J = `${h}`,
  N = i(2, (s, n) => I(s[0], n), $(0, I));
function Q(s) {
  s[0];
}
p(
  a(
    J,
    "/ b&",
    Q,
    void 0,
    void 0,
    i(1, (s, n) => N(s, n[0]), N),
  ),
  "rUbTinTf",
).mount();
