import {
  r as s,
  e as a,
  c as t,
  o as n,
  s as o,
  a as c,
  v as i,
  b as m,
  d as e,
  i as l,
  f as d,
  g as u,
  h as r,
  j as p,
  k as v,
  l as b,
  m as f,
} from "./runtime-BkH_W_GI.js";
const h = d(
    2,
    (s) => {
      const {
        _: { 6: a, 8: t },
      } = s;
      J(s[0], { comments: a.comments, path: t });
    },
    () => v(0, J),
  ),
  k = c(8, 0, void 0, () => h),
  K = c(6, 0, void 0, () => h),
  $ = s(
    "QURHKITf",
    t(
      "<ul></ul>",
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
        _: { 2: a },
        7: t,
      } = s;
      Z(s, `${a.path || "c"}-${t}`);
    },
    () => Z,
  ),
  j = u(4),
  E = a("ZcKJNKFe", (s) =>
    n(
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
    m(s[0], "hidden", !a), e(s[3], a ? "[-]" : "[+]"), E(s);
  }),
  Z = i(
    8,
    (s, a) => m(s[0], "id", a),
    () => r(k, 4),
  ),
  g = i(7, 0, () => _),
  x = i(
    6,
    (s, a) => {
      e(s[1], a.text), j(s, a.comments ? $ : null);
    },
    () => l([j, r(K, 4)]),
  ),
  D = i(
    5,
    (s, a) => {
      x(s, a[0]), g(s, a[1]);
    },
    () => l([x, g]),
  ),
  H = c(2, 0, void 0, () => _),
  I = b(
    0,
    s(
      "$F_EaYZk",
      t(
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
  J = i(
    2,
    (s, a) => I(s, [a.comments]),
    () => l([I, p(H, 0)]),
  );
f();
