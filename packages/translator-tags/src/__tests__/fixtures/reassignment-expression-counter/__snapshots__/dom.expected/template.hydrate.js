// size: 391 (min) 183 (brotli)

import {
  register as n,
  on as c,
  state as t,
  data as o,
  queueEffect as r,
  init as i,
} from "@marko/runtime-tags/dom";
const u = n("a0", (n) => {
    c(
      n[0],
      "click",
      ((n) => {
        const { 6: c } = n;
        return function () {
          m(n, c + 2);
        };
      })(n),
    ),
      c(
        n[2],
        "click",
        ((n) => {
          const { 6: c } = n;
          return function () {
            m(n, 3 * c);
          };
        })(n),
      ),
      c(
        n[4],
        "click",
        ((n) => {
          const { 6: c } = n;
          return function () {
            m(n, c ** 3);
          };
        })(n),
      );
  }),
  m = t(6, (n, c) => {
    o(n[1], c), o(n[3], c), o(n[5], c), r(n, u);
  });
i();
