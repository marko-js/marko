import {
  r as s,
  c as n,
  a,
  o as t,
  b as o,
  v as l,
  q as c,
  d as i,
  e as u,
  i as m,
  f as e,
  g as d,
  h as r,
  j as f,
  k as p,
  l as v,
  m as $,
} from "./runtime-oh3ENSw8.js";
const b = e(2, (s) => {
    const {
      _: { 6: n, 8: a },
    } = s;
    I(s[0], { comments: n.comments, path: a });
  }),
  h = o(8, null, void 0, b),
  k = o(6, null, void 0, b),
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
  _ = e(2, (s) => {
    const {
      _: { 2: n },
      7: a,
    } = s;
    Z(s, `${n.path || "c"}-${a}`);
  }),
  j = r(4),
  E = a("ZcKJNKFe", (s) =>
    t(
      s[2],
      "click",
      ((s) => {
        const { 9: n } = s;
        return function () {
          c(s, F, !n);
        };
      })(s),
    ),
  ),
  F = l(9, (s, n) => {
    i(s[0], "hidden", !n), u(s[3], n ? "[-]" : "[+]"), f(s, E);
  }),
  Z = l(8, (s, n) => i(s[0], "id", n), d(h, 4)),
  g = l(7, null, _),
  q = l(
    6,
    (s, n) => {
      u(s[1], n.text), j(s, n.comments ? K : null);
    },
    m([j, d(k, 4)]),
  ),
  x = l(
    5,
    (s, n) => {
      q(s, n[0]), g(s, n[1]);
    },
    m([q, g]),
  ),
  D = o(2, null, void 0, _),
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
  I = l(2, (s, n) => H(s, [n.comments]), m([H, p(D, 0)])),
  J = "<ul></ul>",
  N = " b",
  Q = function () {};
$();
