import {
  r as s,
  e as n,
  c as a,
  o,
  s as t,
  a as l,
  v as i,
  b as c,
  d as u,
  i as m,
  f as d,
  g as e,
  h as r,
  j as v,
  l as b,
  k as f,
  m as p,
} from "./runtime-p1DTy_np.js";
const $ = "<ul></ul>",
  h = d(
    2,
    (s) => {
      const {
        _: { 6: n, 8: a },
      } = s;
      I(s[0], { comments: n.comments, path: a });
    },
    () => f(0, I),
  ),
  k = l(8, null, void 0, () => h),
  K = l(6, null, void 0, () => h),
  T = s(
    "QURHKITf",
    a(
      `${$}`,
      "/ b&",
      (s) => {
        s[0];
      },
      () => [k, K],
    ),
  ),
  _ = d(
    2,
    (s) => {
      const {
        _: { 2: n },
        7: a,
      } = s;
      U(s, `${n.path || "c"}-${a}`);
    },
    () => U,
  ),
  j = e(4),
  E = n("ZcKJNKFe", (s) =>
    o(
      s[2],
      "click",
      ((s) => {
        const { 9: n } = s;
        return function () {
          F(s, !n);
        };
      })(s),
    ),
  ),
  F = t(9, (s, n) => {
    c(s[0], "hidden", !n), u(s[3], n ? "[-]" : "[+]"), E(s);
  }),
  U = i(
    8,
    (s, n) => c(s[0], "id", n),
    () => r(k, 4),
  ),
  Z = i(7, null, () => _),
  g = i(
    6,
    (s, n) => {
      u(s[1], n.text), j(s, n.comments ? T : null);
    },
    () => m([j, r(K, 4)]),
  ),
  x = i(
    5,
    (s, n) => {
      g(s, n[0]), Z(s, n[1]);
    },
    () => m([g, Z]),
  ),
  D = l(2, null, void 0, () => _),
  H = b(
    0,
    s(
      "$F_EaYZk",
      a(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (s) => {
          F(s, !0);
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
    () => m([H, v(D, 0)]),
  ),
  J = `${$}`,
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
p(
  a(J, "/ b&", R, void 0, void 0, () => Q),
  "rUbTinTf",
).mount();
