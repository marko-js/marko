// size: 567 (min) 313 (brotli)

import {
  register as n,
  createRenderer as o,
  on as i,
  value as t,
  queueSource as c,
  queueEffect as r,
  attr as e,
  data as u,
  loopOf as d,
  init as f,
} from "@marko/runtime-tags/dom";
const m = t(2, (n, o) => u(n[0], o)),
  s = d(
    0,
    n(
      "e",
      o(
        "<li> </li>",
        "D ",
        void 0,
        void 0,
        void 0,
        t(1, (n, o) => m(n, o[0])),
      ),
    ),
  ),
  l = n("f", (n) =>
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
    r(n, l),
      s(n, [
        o,
        function (n) {
          return n;
        },
      ]);
  }),
  a = n("g", (n) =>
    i(
      n[1],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          c(n, k, !o);
        };
      })(n),
    ),
  ),
  k = t(3, (n, o) => {
    e(n[0], "hidden", !o), r(n, a);
  });
f();
