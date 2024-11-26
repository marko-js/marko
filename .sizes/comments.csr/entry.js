import {
  r as s,
  e as a,
  c as o,
  o as t,
  s as n,
  a as c,
  v as i,
  b as m,
  d as e,
  i as d,
  f as l,
  g as p,
  h as u,
  p as r,
  j as b,
  k as f,
  l as v,
  m as $,
  n as _,
} from "./runtime-kPFu6A9s.js";
const h = "<ul></ul>",
  k = l(
    2,
    ({ _: { 6: s, 8: a } }) => N({ comments: s.comments, path: a }, 0),
    () => f(0, N),
  ),
  K = c(8, 0, void 0, () => k),
  T = c(6, 0, void 0, () => k),
  j = s(
    "QURHKITf",
    o(
      `${h}`,
      "/ b&",
      () => {},
      () => [K, T],
    ),
  ),
  E = l(
    2,
    ({ _: { 2: s }, 7: a }) => g(`${s.path || "c"}-${a}`),
    () => g,
  ),
  F = p(4),
  U = a("ZcKJNKFe", (s) =>
    t(
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
    m(_scope[0], "hidden", !s), e(3, s ? "[-]" : "[+]"), U();
  }),
  g = i(
    8,
    (s) => m(_scope[0], "id", s),
    () => u(K, 4),
  ),
  x = i(7, 0, () => E),
  D = i(
    6,
    (s) => {
      e(1, s.text), F(s.comments ? j : 0);
    },
    () => d([F, u(T, 4)]),
  ),
  H = i(
    5,
    (s) => {
      D(s[0]), x(s[1]);
    },
    () => d([D, x]),
  ),
  I = c(2, 0, void 0, () => E),
  J = v(
    0,
    s(
      "$F_EaYZk",
      o(
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
    () => d([J, b(I, 0)]),
  ),
  Q = `${h}`,
  R = r(
    2,
    (s) => N(s, 0),
    () => f(0, N),
  ),
  Y = r(
    1,
    (s) => R(s[0]),
    () => R,
  );
$(
  "rUbTinTf",
  Q,
  "/ b&",
  _(() => {}),
  void 0,
  () => Y,
).mount();
