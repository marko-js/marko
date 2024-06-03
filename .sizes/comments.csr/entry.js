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
  h as v,
  j as r,
  o as $,
  k as b,
  m as f,
  n as p,
} from "./runtime-BUIbQm-R.js";
const h = o(2, (s) => {
    const {
      _: { 6: n, 8: a },
    } = s;
    H(s[0], { comments: n.comments, path: a });
  }),
  g = a(8, null, void 0, h),
  j = a(6, null, void 0, h),
  k = s(
    "0GfEvKAi",
    n(
      `${K}`,
      `/${P}&`,
      (s) => {
        w(s[0]);
      },
      [j, g],
    ),
  ),
  D = o(2, (s) => {
    const {
      _: { 2: n },
      7: a,
    } = s;
    X(s, `${n.path || "c"}-${a}`);
  }),
  E = v(4),
  G = r("mXX1vryl", (s) =>
    $(
      s[2],
      "click",
      ((s) => {
        const { 9: n } = s;
        return function () {
          b(s, V, !n);
        };
      })(s),
    ),
  ),
  V = t(9, (s, n) => {
    m(s[0], "hidden", !n), d(s[3], n ? "[-]" : "[+]"), e(s, G);
  }),
  X = t(8, (s, n) => m(s[0], "id", n), u(g, 4)),
  _ = t(7, null, D),
  q = t(
    6,
    (s, n) => {
      d(s[1], n.text), E(s, n.comments ? k : null);
    },
    l([E, u(j, 4)]),
  ),
  x = t(
    5,
    (s, n) => {
      q(s, n[0]), _(s, n[1]);
    },
    l([q, _]),
  ),
  y = a(2, null, void 0, D),
  A = i(
    0,
    s(
      "HrV8uGg1",
      n(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (s) => {
          V(s, !0);
        },
        [y],
        void 0,
        x,
      ),
    ),
  ),
  H = t(2, (s, n) => A(s, [n.comments]), l([A, c(y, 0)])),
  K = "<ul></ul>",
  P = " b",
  w = function () {},
  z = t(2, (s, n) => H(s[0], n), p(0, H));
f(
  n(
    `${K}`,
    `/${P}&`,
    (s) => {
      w(s[0]);
    },
    void 0,
    void 0,
    t(1, (s, n) => z(s, n[0]), z),
  ),
  "cb6DVPga",
).mount();
