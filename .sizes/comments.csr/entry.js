import {
  r as s,
  e as a,
  c as n,
  o,
  s as t,
  a as i,
  v as c,
  b as m,
  d,
  i as e,
  f as l,
  g as u,
  h as r,
  j as v,
  l as b,
  k as f,
  m as p,
} from "./runtime-DWVIzsEf.js";
const $ = "<ul></ul>",
  h = l(
    2,
    (s) => {
      const {
        _: { 6: a, 8: n },
      } = s;
      I(s[0], { comments: a.comments, path: n });
    },
    () => f(0, I),
  ),
  k = i(8, 0, void 0, () => h),
  K = i(6, 0, void 0, () => h),
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
  _ = l(
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
  j = u(4),
  E = a("ZcKJNKFe", (s) =>
    o(
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
  F = t(9, (s, a) => {
    m(s[0], "hidden", !a), d(s[3], a ? "[-]" : "[+]"), E(s);
  }),
  U = c(
    8,
    (s, a) => m(s[0], "id", a),
    () => r(k, 4),
  ),
  Z = c(7, 0, () => _),
  g = c(
    6,
    (s, a) => {
      d(s[1], a.text), j(s, a.comments ? T : null);
    },
    () => e([j, r(K, 4)]),
  ),
  x = c(
    5,
    (s, a) => {
      g(s, a[0]), Z(s, a[1]);
    },
    () => e([g, Z]),
  ),
  D = i(2, 0, void 0, () => _),
  H = b(
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
        void 0,
        () => x,
      ),
    ),
  ),
  I = c(
    2,
    (s, a) => H(s, [a.comments]),
    () => e([H, v(D, 0)]),
  ),
  J = `${$}`,
  N = c(
    2,
    (s, a) => I(s[0], a),
    () => f(0, I),
  ),
  Q = c(
    1,
    (s, a) => N(s, a[0]),
    () => N,
  );
function R(s) {
  s[0];
}
p(
  n(J, "/ b&", R, void 0, void 0, () => Q),
  "rUbTinTf",
).mount();
