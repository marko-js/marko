import {
  i as s,
  a,
  r as n,
  b as t,
  v as l,
  c as o,
  o as c,
  d as i,
  e as m,
  f as u,
  l as e,
  g as d,
  h as r,
  q as p,
  j as v,
  k as b,
  m as f,
  n as h,
} from "./runtime-DgAALy3g.js";
const k = s(
    2,
    (s) => {
      const {
        _: { 6: a, 8: n },
      } = s;
      J(s[0], { comments: a.comments, path: n });
    },
    a(0, J),
  ),
  K = r(8, null, void 0, k),
  $ = r(6, null, void 0, k),
  _ = n(
    "QURHKITf",
    o(
      "<ul></ul>",
      "/ b&",
      (s) => {
        s[0];
      },
      [$, K],
    ),
  ),
  j = s(
    2,
    (s) => {
      const {
        _: { 2: a },
        7: n,
      } = s;
      g(s, `${a.path || "c"}-${n}`);
    },
    g,
  ),
  E = b(4),
  F = t("ZcKJNKFe", (s) =>
    c(
      s[2],
      "click",
      ((s) => {
        const { 9: a } = s;
        return function () {
          p(s, Z, !a);
        };
      })(s),
    ),
  ),
  Z = l(9, (s, a) => {
    m(s[0], "hidden", !a), v(s[3], a ? "[-]" : "[+]"), f(s, F);
  }),
  g = l(8, (s, a) => m(s[0], "id", a), i(K, 4)),
  q = l(7, null, j),
  x = l(
    6,
    (s, a) => {
      v(s[1], a.text), E(s, a.comments ? _ : null);
    },
    u([E, i($, 4)]),
  ),
  D = l(
    5,
    (s, a) => {
      x(s, a[0]), q(s, a[1]);
    },
    u([x, q]),
  ),
  H = r(2, null, void 0, j),
  I = e(
    0,
    n(
      "$F_EaYZk",
      o(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (s) => {
          Z(s, !0);
        },
        [H],
        void 0,
        D,
      ),
    ),
  ),
  J = l(2, (s, a) => I(s, [a.comments]), u([I, d(H, 0)]));
h();
