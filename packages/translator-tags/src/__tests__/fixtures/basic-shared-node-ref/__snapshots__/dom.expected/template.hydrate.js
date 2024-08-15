// size: 590 (min) 304 (brotli)

import {
  register as n,
  createRenderer as o,
  on as i,
  value as t,
  queueSource as c,
  queueEffect as r,
  attr as e,
  data as a,
  loopOf as u,
  init as d,
} from "@marko/runtime-tags/dom";
const m = n(
    "a0",
    (n) =>
      function (n) {
        return n;
      },
  ),
  s = t(2, (n, o) => a(n[0], o)),
  f = u(
    0,
    n(
      "a1",
      o(
        "<li> </li>",
        "D ",
        void 0,
        void 0,
        void 0,
        t(1, (n, o) => s(n, o[0])),
      ),
    ),
  ),
  l = n("a2", (n) =>
    i(
      n[2],
      "click",
      ((n) => {
        const { 4: o } = n;
        return function () {
          c(n, v, [].concat(o).reverse());
        };
      })(n),
    ),
  ),
  v = t(4, (n, o) => {
    r(n, l), f(n, [o, m(n)]);
  }),
  k = n("a3", (n) =>
    i(
      n[1],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          c(n, g, !o);
        };
      })(n),
    ),
  ),
  g = t(3, (n, o) => {
    e(n[0], "hidden", !o), r(n, k);
  });
d();
