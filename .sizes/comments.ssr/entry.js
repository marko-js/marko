import {
  r as s,
  c as n,
  a,
  b as t,
  o,
  v as l,
  d as c,
  e as i,
  i as u,
  f as m,
  q as e,
  g as d,
  h as r,
  j as f,
  k as p,
  l as v,
  m as $,
} from "./runtime-C35w6ZnD.js";
const b = m(2, (s) => {
    const {
      _: { 6: n, 8: a },
    } = s;
    I(s[0], { comments: n.comments, path: a });
  }),
  h = t(8, null, void 0, b),
  k = t(6, null, void 0, b),
  K = s(
    "QURHKITf",
    n(
      `${J}`,
      `/${N}&`,
      (s) => {
        Q(s[0]);
      },
      [k, h],
    ),
  ),
  _ = m(2, (s) => {
    const {
      _: { 2: n },
      7: a,
    } = s;
    Z(s, `${n.path || "c"}-${a}`);
  }),
  j = r(4),
  E = a("ZcKJNKFe", (s) =>
    o(
      s[2],
      "click",
      ((s) => {
        const { 9: n } = s;
        return function () {
          e(s, F, !n);
        };
      })(s),
    ),
  ),
  F = l(9, (s, n) => {
    c(s[0], "hidden", !n), i(s[3], n ? "[-]" : "[+]"), p(s, E);
  }),
  Z = l(8, (s, n) => c(s[0], "id", n), d(h, 4)),
  g = l(7, null, _),
  q = l(
    6,
    (s, n) => {
      i(s[1], n.text), j(s, n.comments ? K : null);
    },
    u([j, d(k, 4)]),
  ),
  x = l(
    5,
    (s, n) => {
      q(s, n[0]), g(s, n[1]);
    },
    u([q, g]),
  ),
  D = t(2, null, void 0, _),
  H = v(
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
  I = l(2, (s, n) => H(s, [n.comments]), u([H, f(D, 0)])),
  J = "<ul></ul>",
  N = " b",
  Q = function () {};
$();
