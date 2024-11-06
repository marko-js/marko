import {
  r as s,
  e as a,
  c as n,
  o as t,
  s as l,
  a as o,
  v as c,
  b as i,
  d as m,
  i as u,
  f as e,
  g as d,
  h as r,
  j as p,
  k as v,
  l as b,
  m as f,
} from "./runtime-G04wfRkx.js";
const h = e(
    2,
    (s) => {
      const {
        _: { 6: a, 8: n },
      } = s;
      J(s[0], { comments: a.comments, path: n });
    },
    () => v(0, J),
  ),
  k = o(8, null, void 0, () => h),
  K = o(6, null, void 0, () => h),
  $ = s(
    "QURHKITf",
    n(
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
  F = l(9, (s, a) => {
    i(s[0], "hidden", !a), m(s[3], a ? "[-]" : "[+]"), E(s);
  }),
  Z = c(
    8,
    (s, a) => i(s[0], "id", a),
    () => r(k, 4),
  ),
  g = c(7, null, () => _),
  x = c(
    6,
    (s, a) => {
      m(s[1], a.text), j(s, a.comments ? $ : null);
    },
    () => u([j, r(K, 4)]),
  ),
  D = c(
    5,
    (s, a) => {
      x(s, a[0]), g(s, a[1]);
    },
    () => u([x, g]),
  ),
  H = o(2, null, void 0, () => _),
  I = b(
    0,
    s(
      "$F_EaYZk",
      n(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (s) => {
          F(s, !0);
        },
        () => [H],
        void 0,
        () => D,
      ),
    ),
  ),
  J = c(
    2,
    (s, a) => I(s, [a.comments]),
    () => u([I, p(H, 0)]),
  );
f();
