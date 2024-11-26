import {
  r as s,
  e as a,
  c as t,
  o,
  s as n,
  a as c,
  v as e,
  b as i,
  d as m,
  i as l,
  f as p,
  g as d,
  h as u,
  p as r,
  j as _,
  k as b,
  l as f,
  m as h,
} from "./runtime-D5ON0GFX.js";
const v = p(
    2,
    ({ _: { 6: s, 8: a } }) => N({ comments: s.comments, path: a }, 0),
    () => _(0, N),
  ),
  k = c(8, 0, void 0, () => v),
  K = c(6, 0, void 0, () => v),
  $ = s(
    "QURHKITf",
    t(
      "<ul></ul>",
      "/ b&",
      () => {},
      () => [k, K],
    ),
  ),
  j = p(
    2,
    ({ _: { 2: s }, 7: a }) => g(`${s.path || "c"}-${a}`),
    () => g,
  ),
  E = d(4),
  F = a("ZcKJNKFe", (s) =>
    o(
      s[2],
      "click",
      ((s) => {
        const { 9: a } = s;
        return function () {
          Z(!a, s);
        };
      })(s),
    ),
  ),
  Z = n(9, (s) => {
    i(_scope[0], "hidden", !s), m(3, s ? "[-]" : "[+]"), F();
  }),
  g = e(
    8,
    (s) => i(_scope[0], "id", s),
    () => u(k, 4),
  ),
  x = e(7, 0, () => j),
  D = e(
    6,
    (s) => {
      m(1, s.text), E(s.comments ? $ : 0);
    },
    () => l([E, u(K, 4)]),
  ),
  H = e(
    5,
    (s) => {
      D(s[0]), x(s[1]);
    },
    () => l([D, x]),
  ),
  I = c(2, 0, void 0, () => j),
  J = f(
    0,
    s(
      "$F_EaYZk",
      t(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        () => {
          Z(!0);
        },
        () => [I],
        () => H,
      ),
    ),
  ),
  N = r(
    2,
    (s) => J([s.comments]),
    () => l([J, b(I, 0)]),
  );
h();
