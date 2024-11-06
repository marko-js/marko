// size: 562 (min) 199 (brotli)

import {
  effect as n,
  on as c,
  state as t,
  data as o,
  init as r,
} from "@marko/runtime-tags/dom";
const i = n("a0", (n) =>
    c(
      n[6],
      "click",
      ((n) => {
        const { 11: c } = n;
        return function () {
          u(n, c + 1);
        };
      })(n),
    ),
  ),
  u = t(11, (n, c) => {
    o(n[7], c), i(n);
  }),
  a = n("a1", (n) =>
    c(
      n[4],
      "click",
      ((n) => {
        const { 10: c } = n;
        return function () {
          s(n, c + 1);
        };
      })(n),
    ),
  ),
  s = t(10, (n, c) => {
    o(n[5], c), a(n);
  }),
  e = n("a2", (n) =>
    c(
      n[2],
      "click",
      ((n) => {
        const { 9: c } = n;
        return function () {
          f(n, c + 1);
        };
      })(n),
    ),
  ),
  f = t(9, (n, c) => {
    o(n[3], c), e(n);
  }),
  k = n("a3", (n) =>
    c(
      n[0],
      "click",
      ((n) => {
        const { 8: c } = n;
        return function () {
          m(n, c + 1);
        };
      })(n),
    ),
  ),
  m = t(8, (n, c) => {
    o(n[1], c), k(n);
  });
r();
