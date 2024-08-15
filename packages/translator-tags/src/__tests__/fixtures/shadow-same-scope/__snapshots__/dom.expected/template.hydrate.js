// size: 614 (min) 217 (brotli)

import {
  register as n,
  on as c,
  queueSource as t,
  value as o,
  data as r,
  queueEffect as i,
  init as u,
} from "@marko/runtime-tags/dom";
const a = n("a0", (n) =>
    c(
      n[6],
      "click",
      ((n) => {
        const { 11: c } = n;
        return function () {
          t(n, s, c + 1);
        };
      })(n),
    ),
  ),
  s = o(11, (n, c) => {
    r(n[7], c), i(n, a);
  }),
  e = n("a1", (n) =>
    c(
      n[4],
      "click",
      ((n) => {
        const { 10: c } = n;
        return function () {
          t(n, f, c + 1);
        };
      })(n),
    ),
  ),
  f = o(10, (n, c) => {
    r(n[5], c), i(n, e);
  }),
  k = n("a2", (n) =>
    c(
      n[2],
      "click",
      ((n) => {
        const { 9: c } = n;
        return function () {
          t(n, m, c + 1);
        };
      })(n),
    ),
  ),
  m = o(9, (n, c) => {
    r(n[3], c), i(n, k);
  }),
  l = n("a3", (n) =>
    c(
      n[0],
      "click",
      ((n) => {
        const { 8: c } = n;
        return function () {
          t(n, d, c + 1);
        };
      })(n),
    ),
  ),
  d = o(8, (n, c) => {
    r(n[1], c), i(n, l);
  });
u();
