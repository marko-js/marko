import {
  r as s,
  c as n,
  a,
  i as o,
  v as t,
  b as l,
  l as i,
  d as c,
  e as u,
  f as m,
  g as d,
  q as e,
  h as r,
  j as v,
  o as $,
  k as f,
  m as b,
  n as p,
} from "./runtime-DPiBbhgy.js";
const h = o(2, (s) => {
    const {
      _: { 6: n, 8: a },
    } = s;
    H(s[0], { comments: n.comments, path: a });
  }),
  k = a(8, null, void 0, h),
  K = a(6, null, void 0, h),
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
  _ = o(2, (s) => {
    const {
      _: { 2: n },
      7: a,
    } = s;
    U(s, `${n.path || "c"}-${a}`);
  }),
  j = r(4),
  E = v("ZcKJNKFe", (s) =>
    $(
      s[2],
      "click",
      ((s) => {
        const { 9: n } = s;
        return function () {
          f(s, F, !n);
        };
      })(s),
    ),
  ),
  F = t(9, (s, n) => {
    m(s[0], "hidden", !n), d(s[3], n ? "[-]" : "[+]"), e(s, E);
  }),
  U = t(8, (s, n) => m(s[0], "id", n), u(k, 4)),
  Z = t(7, null, _),
  g = t(
    6,
    (s, n) => {
      d(s[1], n.text), j(s, n.comments ? T : null);
    },
    l([j, u(K, 4)]),
  ),
  q = t(
    5,
    (s, n) => {
      g(s, n[0]), Z(s, n[1]);
    },
    l([g, Z]),
  ),
  x = a(2, null, void 0, _),
  D = i(
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
  H = t(2, (s, n) => D(s, [n.comments]), l([D, c(x, 0)])),
  I = "<ul></ul>",
  J = " b",
  N = function () {},
  Q = t(2, (s, n) => H(s[0], n), p(0, H));
b(
  n(
    `${I}`,
    `/${J}&`,
    (s) => {
      N(s[0]);
    },
    void 0,
    void 0,
    t(1, (s, n) => Q(s, n[0]), Q),
  ),
  "rUbTinTf",
).mount();
