// size: 588 (min) 349 (brotli)

import {
  register as n,
  createRenderer as c,
  on as o,
  value as i,
  queueSource as t,
  queueEffect as r,
  attr as e,
  data as u,
  loopOf as d,
  init as m,
} from "@marko/runtime-tags/dom";
const s = i(2, (n, c) => u(n[0], c)),
  f = d(
    0,
    n(
      "w0YucCNU",
      c(
        "<li> </li>",
        "D ",
        void 0,
        void 0,
        void 0,
        i(1, (n, c) => s(n, c[0])),
      ),
    ),
  ),
  l = n("A2yR8LMx", (n) =>
    o(
      n[2],
      "click",
      ((n) => {
        const { 4: c } = n;
        return function () {
          t(n, v, [].concat(c).reverse());
        };
      })(n),
    ),
  ),
  v = i(4, (n, c) => {
    r(n, l),
      f(n, [
        c,
        function (n) {
          return n;
        },
      ]);
  }),
  a = n("Dbyc1xWp", (n) =>
    o(
      n[1],
      "click",
      ((n) => {
        const { 3: c } = n;
        return function () {
          t(n, k, !c);
        };
      })(n),
    ),
  ),
  k = i(3, (n, c) => {
    e(n[0], "hidden", !c), r(n, a);
  });
m();
