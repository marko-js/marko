import {
  r as s,
  c as n,
  o as a,
  q as o,
  a as t,
  v as l,
  b as i,
  d as c,
  e as u,
  i as m,
  f as d,
  g as e,
  h as r,
  j as v,
  l as b,
  k as f,
  m as p,
} from "./runtime-7bp0Fg2l.js";
const $ = "<ul></ul>",
  h = d(
    2,
    (s) => {
      const {
        _: { 6: n, 8: a },
      } = s;
      H(s[0], { comments: n.comments, path: a });
    },
    () => f(0, H),
  ),
  k = t(8, null, void 0, () => h),
  K = t(6, null, void 0, () => h),
  T = s(
    "QURHKITf",
    n(
      `${$}`,
      "/ b&",
      (s) => {
        s[0];
      },
      () => [K, k],
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
  E = s("ZcKJNKFe", (s) =>
    a(
      s[2],
      "click",
      ((s) => {
        const { 9: n } = s;
        return function () {
          o(s, F, !n);
        };
      })(s),
    ),
  ),
  F = l(9, (s, n) => {
    i(s[0], "hidden", !n), c(s[3], n ? "[-]" : "[+]"), u(s, E);
  }),
  U = l(
    8,
    (s, n) => i(s[0], "id", n),
    () => r(k, 4),
  ),
  Z = l(7, null, () => _),
  g = l(
    6,
    (s, n) => {
      c(s[1], n.text), j(s, n.comments ? T : null);
    },
    () => m([j, r(K, 4)]),
  ),
  q = l(
    5,
    (s, n) => {
      g(s, n[0]), Z(s, n[1]);
    },
    () => m([g, Z]),
  ),
  x = t(2, null, void 0, () => _),
  D = b(
    0,
    s(
      "$F_EaYZk",
      n(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (s) => {
          F(s, !0);
        },
        () => [x],
        void 0,
        () => q,
      ),
    ),
  ),
  H = l(
    2,
    (s, n) => D(s, [n.comments]),
    () => m([D, v(x, 0)]),
  ),
  I = `${$}`,
  J = l(
    2,
    (s, n) => H(s[0], n),
    () => f(0, H),
  ),
  N = l(
    1,
    (s, n) => J(s, n[0]),
    () => J,
  );
function Q(s) {
  s[0];
}
p(
  n(I, "/ b&", Q, void 0, void 0, () => N),
  "rUbTinTf",
).mount();
