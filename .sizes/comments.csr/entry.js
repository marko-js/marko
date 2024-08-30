import {
  r as s,
  c as n,
  a,
  o,
  b as t,
  v as l,
  q as i,
  d as c,
  e as u,
  f as m,
  i as d,
  g as e,
  h as r,
  j as v,
  k as $,
  l as f,
  m as b,
  n as p,
} from "./runtime-DGYNJV20.js";
const h = e(2, (s) => {
    const {
      _: { 6: n, 8: a },
    } = s;
    H(s[0], { comments: n.comments, path: a });
  }),
  k = t(8, null, void 0, h),
  K = t(6, null, void 0, h),
  T = s(
    "QURHKITf",
    n(
      `${I}`,
      `/${J}&`,
      (s) => {
        N(s[0]);
      },
      [K, k],
    ),
  ),
  _ = e(2, (s) => {
    const {
      _: { 2: n },
      7: a,
    } = s;
    U(s, `${n.path || "c"}-${a}`);
  }),
  j = v(4),
  E = a("ZcKJNKFe", (s) =>
    o(
      s[2],
      "click",
      ((s) => {
        const { 9: n } = s;
        return function () {
          i(s, F, !n);
        };
      })(s),
    ),
  ),
  F = l(9, (s, n) => {
    c(s[0], "hidden", !n), u(s[3], n ? "[-]" : "[+]"), m(s, E);
  }),
  U = l(8, (s, n) => c(s[0], "id", n), r(k, 4)),
  Z = l(7, null, _),
  g = l(
    6,
    (s, n) => {
      u(s[1], n.text), j(s, n.comments ? T : null);
    },
    d([j, r(K, 4)]),
  ),
  q = l(
    5,
    (s, n) => {
      g(s, n[0]), Z(s, n[1]);
    },
    d([g, Z]),
  ),
  x = t(2, null, void 0, _),
  D = f(
    0,
    s(
      "$F_EaYZk",
      n(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (s) => {
          F(s, !0);
        },
        [x],
        void 0,
        q,
      ),
    ),
  ),
  H = l(2, (s, n) => D(s, [n.comments]), d([D, $(x, 0)])),
  I = "<ul></ul>",
  J = " b",
  N = function () {},
  Q = l(2, (s, n) => H(s[0], n), p(0, H));
b(
  n(
    `${I}`,
    `/${J}&`,
    (s) => {
      N(s[0]);
    },
    void 0,
    void 0,
    l(1, (s, n) => Q(s, n[0]), Q),
  ),
  "rUbTinTf",
).mount();
