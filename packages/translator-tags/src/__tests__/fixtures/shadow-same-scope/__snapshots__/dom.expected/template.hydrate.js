// size: 589 (min) 211 (brotli)

import {
  register as n,
  on as c,
  state as t,
  data as o,
  queueEffect as r,
  init as i,
} from "@marko/runtime-tags/dom";
const u = n("a0", (n) =>
    c(
      n[6],
      "click",
      ((n) => {
        const { 11: c } = n;
        return function () {
          a(n, c + 1);
        };
      })(n),
    ),
  ),
  a = t(11, (n, c) => {
    o(n[7], c), r(n, u);
  }),
  s = n("a1", (n) =>
    c(
      n[4],
      "click",
      ((n) => {
        const { 10: c } = n;
        return function () {
          e(n, c + 1);
        };
      })(n),
    ),
  ),
  e = t(10, (n, c) => {
    o(n[5], c), r(n, s);
  }),
  f = n("a2", (n) =>
    c(
      n[2],
      "click",
      ((n) => {
        const { 9: c } = n;
        return function () {
          k(n, c + 1);
        };
      })(n),
    ),
  ),
  k = t(9, (n, c) => {
    o(n[3], c), r(n, f);
  }),
  m = n("a3", (n) =>
    c(
      n[0],
      "click",
      ((n) => {
        const { 8: c } = n;
        return function () {
          l(n, c + 1);
        };
      })(n),
    ),
  ),
  l = t(8, (n, c) => {
    o(n[1], c), r(n, m);
  });
i();
