// size: 414 (min) 190 (brotli)

import {
  register as n,
  on as c,
  queueSource as t,
  value as o,
  data as r,
  queueEffect as i,
  init as u,
} from "@marko/runtime-tags/dom";
const m = n("a2", (n) => {
    c(
      n[0],
      "click",
      ((n) => {
        const { 6: c } = n;
        return function () {
          t(n, s, c + 2);
        };
      })(n),
    ),
      c(
        n[2],
        "click",
        ((n) => {
          const { 6: c } = n;
          return function () {
            t(n, s, 3 * c);
          };
        })(n),
      ),
      c(
        n[4],
        "click",
        ((n) => {
          const { 6: c } = n;
          return function () {
            t(n, s, c ** 3);
          };
        })(n),
      );
  }),
  s = o(6, (n, c) => {
    r(n[1], c), r(n[3], c), r(n[5], c), i(n, m);
  });
u();
