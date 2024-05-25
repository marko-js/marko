import {
  r as s,
  c as n,
  a,
  b as t,
  o as l,
  v as o,
  d as i,
  e as c,
  i as u,
  f as m,
  q as e,
  g as d,
  h as r,
  j as v,
  k as f,
  l as p,
  m as b,
} from "./runtime-BDGaykzf.js";
const h = m(2, (s) => {
    const {
      _: { 6: n, 8: a },
    } = s;
    H(s[0], { comments: n.comments, path: a });
  }),
  $ = t(8, null, void 0, h),
  g = t(6, null, void 0, h),
  j = s(
    "0GfEvKAi",
    n(
      `${K}`,
      `/${V}&`,
      (s) => {
        w(s[0]);
      },
      [g, $],
    ),
  ),
  k = m(2, (s) => {
    const {
      _: { 2: n },
      7: a,
    } = s;
    _(s, `${n.path || "c"}-${a}`);
  }),
  E = r(4),
  G = a("mXX1vryl", (s) =>
    l(
      s[2],
      "click",
      ((s) => {
        const { 9: n } = s;
        return function () {
          e(s, X, !n);
        };
      })(s),
    ),
  ),
  X = o(9, (s, n) => {
    i(s[0], "hidden", !n), c(s[3], n ? "[-]" : "[+]"), f(s, G);
  }),
  _ = o(8, (s, n) => i(s[0], "id", n), d($, 4)),
  q = o(7, null, k),
  x = o(
    6,
    (s, n) => {
      c(s[1], n.text), E(s, n.comments ? j : null);
    },
    u([E, d(g, 4)]),
  ),
  y = o(
    5,
    (s, n) => {
      x(s, n[0]), q(s, n[1]);
    },
    u([x, q]),
  ),
  A = t(2, null, void 0, k),
  D = p(
    0,
    s(
      "HrV8uGg1",
      n(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (s) => {
          X(s, !0);
        },
        [A],
        void 0,
        y,
      ),
    ),
  ),
  H = o(2, (s, n) => D(s, [n.comments]), v(A, 0)),
  K = "<ul></ul>",
  V = " b",
  w = function () {};
b();
