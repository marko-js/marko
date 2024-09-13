import {
  r as s,
  c as a,
  o as n,
  q as t,
  a as l,
  v as o,
  b as c,
  d as i,
  e as m,
  i as u,
  f as e,
  g as d,
  h as r,
  j as p,
  k as v,
  l as b,
  m as f,
} from "./runtime-CgQDpoqY.js";
const h = e(
    2,
    (s) => {
      const {
        _: { 6: a, 8: n },
      } = s;
      I(s[0], { comments: a.comments, path: n });
    },
    () => v(0, I),
  ),
  k = l(8, null, void 0, () => h),
  K = l(6, null, void 0, () => h),
  $ = s(
    "QURHKITf",
    a(
      "<ul></ul>",
      "/ b&",
      (s) => {
        s[0];
      },
      () => [k, K],
    ),
  ),
  _ = e(
    2,
    (s) => {
      const {
        _: { 2: a },
        7: n,
      } = s;
      Z(s, `${a.path || "c"}-${n}`);
    },
    () => Z,
  ),
  j = d(4),
  E = s("ZcKJNKFe", (s) =>
    n(
      s[2],
      "click",
      ((s) => {
        const { 9: a } = s;
        return function () {
          t(s, F, !a);
        };
      })(s),
    ),
  ),
  F = o(9, (s, a) => {
    c(s[0], "hidden", !a), i(s[3], a ? "[-]" : "[+]"), m(s, E);
  }),
  Z = o(
    8,
    (s, a) => c(s[0], "id", a),
    () => r(k, 4),
  ),
  g = o(7, null, () => _),
  q = o(
    6,
    (s, a) => {
      i(s[1], a.text), j(s, a.comments ? $ : null);
    },
    () => u([j, r(K, 4)]),
  ),
  x = o(
    5,
    (s, a) => {
      q(s, a[0]), g(s, a[1]);
    },
    () => u([q, g]),
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
  I = o(
    2,
    (s, a) => H(s, [a.comments]),
    () => u([H, p(D, 0)]),
  );
f();
