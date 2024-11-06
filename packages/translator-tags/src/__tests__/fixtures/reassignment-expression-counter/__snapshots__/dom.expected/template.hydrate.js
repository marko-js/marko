// size: 370 (min) 174 (brotli)

import {
  effect as n,
  on as c,
  state as t,
  data as o,
  init as r,
} from "@marko/runtime-tags/dom";
const i = n("a0", (n) => {
    c(
      n[0],
      "click",
      ((n) => {
        const { 6: c } = n;
        return function () {
          u(n, c + 2);
        };
      })(n),
    ),
      c(
        n[2],
        "click",
        ((n) => {
          const { 6: c } = n;
          return function () {
            u(n, 3 * c);
          };
        })(n),
      ),
      c(
        n[4],
        "click",
        ((n) => {
          const { 6: c } = n;
          return function () {
            u(n, c ** 3);
          };
        })(n),
      );
  }),
  u = t(6, (n, c) => {
    o(n[1], c), o(n[3], c), o(n[5], c), i(n);
  });
r();
