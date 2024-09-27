import {
  i as s,
  a as n,
  r as a,
  b as o,
  v as t,
  c as l,
  o as i,
  d as c,
  e as u,
  f as m,
  l as d,
  g as e,
  h as r,
  q as v,
  j as b,
  k as f,
  m as p,
  n as $,
} from "./runtime-CT0koEF3.js";
const h = "<ul></ul>",
  k = s(
    2,
    (s) => {
      const {
        _: { 6: n, 8: a },
      } = s;
      I(s[0], { comments: n.comments, path: a });
    },
    n(0, I),
  ),
  K = r(8, null, void 0, k),
  T = r(6, null, void 0, k),
  _ = a(
    "QURHKITf",
    l(
      `${h}`,
      "/ b&",
      (s) => {
        s[0];
      },
      [T, K],
    ),
  ),
  j = s(
    2,
    (s) => {
      const {
        _: { 2: n },
        7: a,
      } = s;
      Z(s, `${n.path || "c"}-${a}`);
    },
    Z,
  ),
  E = p(4),
  F = o("ZcKJNKFe", (s) =>
    i(
      s[2],
      "click",
      ((s) => {
        const { 9: n } = s;
        return function () {
          v(s, U, !n);
        };
      })(s),
    ),
  ),
  U = t(9, (s, n) => {
    u(s[0], "hidden", !n), b(s[3], n ? "[-]" : "[+]"), f(s, F);
  }),
  Z = t(8, (s, n) => u(s[0], "id", n), c(K, 4)),
  g = t(7, null, j),
  q = t(
    6,
    (s, n) => {
      b(s[1], n.text), E(s, n.comments ? _ : null);
    },
    m([E, c(T, 4)]),
  ),
  x = t(
    5,
    (s, n) => {
      q(s, n[0]), g(s, n[1]);
    },
    m([q, g]),
  ),
  D = r(2, null, void 0, j),
  H = d(
    0,
    a(
      "$F_EaYZk",
      l(
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
  I = t(2, (s, n) => H(s, [n.comments]), m([H, e(D, 0)])),
  J = `${h}`,
  N = t(2, (s, n) => I(s[0], n), n(0, I));
function Q(s) {
  s[0];
}
$(
  l(
    J,
    "/ b&",
    Q,
    void 0,
    void 0,
    t(1, (s, n) => N(s, n[0]), N),
  ),
  "rUbTinTf",
).mount();
