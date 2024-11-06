import {
  r as s,
  e as a,
  c as n,
  o as t,
  s as o,
  a as c,
  v as i,
  i as m,
  b as e,
  d as l,
  f as u,
  g as d,
  h as r,
  j as b,
  l as f,
  k as p,
  m as v,
} from "./runtime-C9sq24Du.js";
const $ = "<ul></ul>",
  h = r(
    2,
    (s) => {
      const {
        _: { 6: a, 8: n },
      } = s;
      I(s[0], { comments: a.comments, path: n });
    },
    () => p(0, I),
  ),
  k = c(8, 0, void 0, () => h),
  K = c(6, 0, void 0, () => h),
  T = s(
    "QURHKITf",
    n(
      `${$}`,
      "/ b&",
      (s) => {
        s[0];
      },
      () => [k, K],
    ),
  ),
  _ = r(
    2,
    (s) => {
      const {
        _: { 2: a },
        7: n,
      } = s;
      U(s, `${a.path || "c"}-${n}`);
    },
    () => U,
  ),
  j = b(4),
  E = a("ZcKJNKFe", (s) =>
    t(
      s[2],
      "click",
      ((s) => {
        const { 9: a } = s;
        return function () {
          F(s, !a);
        };
      })(s),
    ),
  ),
  F = o(9, (s, a) => {
    e(s[0], "hidden", !a), l(s[3], a ? "[-]" : "[+]"), E(s);
  }),
  U = i(
    8,
    (s, a) => e(s[0], "id", a),
    () => u(k, 4),
  ),
  Z = i(7, 0, () => _),
  g = i(
    6,
    (s, a) => {
      l(s[1], a.text), j(s, a.comments ? T : null);
    },
    () => m([j, u(K, 4)]),
  ),
  x = i(
    5,
    (s, a) => {
      g(s, a[0]), Z(s, a[1]);
    },
    () => m([g, Z]),
  ),
  D = c(2, 0, void 0, () => _),
  H = f(
    0,
    s(
      "$F_EaYZk",
      n(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (s) => {
          F(s, !0);
        },
        () => [D],
        () => x,
      ),
    ),
  ),
  I = i(
    2,
    (s, a) => H(s, [a.comments]),
    () => m([H, d(D, 0)]),
  ),
  J = `${$}`,
  N = i(
    2,
    (s, a) => I(s[0], a),
    () => p(0, I),
  ),
  Q = i(
    1,
    (s, a) => N(s, a[0]),
    () => N,
  );
function R(s) {
  s[0];
}
v("rUbTinTf", J, "/ b&", R, void 0, () => Q).mount();
