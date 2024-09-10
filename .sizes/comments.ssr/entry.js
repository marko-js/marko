import {
  r as s,
  a,
  c as n,
  o as t,
  b as l,
  q as o,
  v as c,
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
} from "./runtime-DyIbS0K6.js";
const h = e(2, (s) => {
    const {
      _: { 6: a, 8: n },
    } = s;
    I(s[0], { comments: a.comments, path: n });
  }),
  k = l(8, null, void 0, h),
  K = l(6, null, void 0, h),
  $ = s(
    "QURHKITf",
    n(
      "<ul></ul>",
      "/ b&",
      (s) => {
        s[0];
      },
      [K, k],
    ),
  ),
  _ = e(2, (s) => {
    const {
      _: { 2: a },
      7: n,
    } = s;
    Z(s, `${a.path || "c"}-${n}`);
  }),
  j = p(4),
  E = a("ZcKJNKFe", (s) =>
    t(
      s[2],
      "click",
      ((s) => {
        const { 9: a } = s;
        return function () {
          o(s, F, !a);
        };
      })(s),
    ),
  ),
  F = c(9, (s, a) => {
    i(s[0], "hidden", !a), m(s[3], a ? "[-]" : "[+]"), d(s, E);
  }),
  Z = c(8, (s, a) => i(s[0], "id", a), r(k, 4)),
  g = c(7, null, _),
  q = c(
    6,
    (s, a) => {
      m(s[1], a.text), j(s, a.comments ? $ : null);
    },
    u([j, r(K, 4)]),
  ),
  x = c(
    5,
    (s, a) => {
      q(s, a[0]), g(s, a[1]);
    },
    u([q, g]),
  ),
  D = l(2, null, void 0, _),
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
        [D],
        void 0,
        x,
      ),
    ),
  ),
  I = c(2, (s, a) => H(s, [a.comments]), u([H, v(D, 0)]));
f();
