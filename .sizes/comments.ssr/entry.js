import {
  r as s,
  a,
  c as n,
  o as t,
  q as l,
  b as o,
  v as c,
  d as i,
  e as m,
  f as u,
  i as e,
  g as d,
  h as r,
  j as p,
  k as v,
  l as b,
  m as f,
  n as h,
} from "./runtime-D0NwNs7Q.js";
const k = e(
    2,
    (s) => {
      const {
        _: { 6: a, 8: n },
      } = s;
      J(s[0], { comments: a.comments, path: n });
    },
    () => b(0, J),
  ),
  K = o(8, null, void 0, () => k),
  $ = o(6, null, void 0, () => k),
  _ = s(
    "QURHKITf",
    n(
      "<ul></ul>",
      "/ b&",
      (s) => {
        s[0];
      },
      () => [$, K],
    ),
  ),
  j = e(
    2,
    (s) => {
      const {
        _: { 2: a },
        7: n,
      } = s;
      g(s, `${a.path || "c"}-${n}`);
    },
    () => g,
  ),
  E = r(4),
  F = a("ZcKJNKFe", (s) =>
    t(
      s[2],
      "click",
      ((s) => {
        const { 9: a } = s;
        return function () {
          l(s, Z, !a);
        };
      })(s),
    ),
  ),
  Z = c(9, (s, a) => {
    i(s[0], "hidden", !a), m(s[3], a ? "[-]" : "[+]"), u(s, F);
  }),
  g = c(
    8,
    (s, a) => i(s[0], "id", a),
    () => p(K, 4),
  ),
  q = c(7, null, () => j),
  x = c(
    6,
    (s, a) => {
      m(s[1], a.text), E(s, a.comments ? _ : null);
    },
    () => d([E, p($, 4)]),
  ),
  D = c(
    5,
    (s, a) => {
      x(s, a[0]), q(s, a[1]);
    },
    () => d([x, q]),
  ),
  H = o(2, null, void 0, () => j),
  I = f(
    0,
    s(
      "$F_EaYZk",
      n(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (s) => {
          Z(s, !0);
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
    () => d([I, v(H, 0)]),
  );
h();
