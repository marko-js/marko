// size: 570 (min) 305 (brotli)

import {
  register as n,
  createRenderer as o,
  on as i,
  value as t,
  state as c,
  queueEffect as r,
  attr as e,
  data as u,
  loopOf as a,
  init as d,
} from "@marko/runtime-tags/dom";
const m = t(2, (n, o) => u(n[0], o)),
  s = t(1, (n, o) => m(n, o[0])),
  f = a(
    0,
    n(
      "a0",
      o("<li> </li>", "D ", void 0, void 0, void 0, () => s),
    ),
  ),
  l = n("a1", (n) =>
    i(
      n[2],
      "click",
      ((n) => {
        const { 4: o } = n;
        return function () {
          v(n, [].concat(o).reverse());
        };
      })(n),
    ),
  ),
  v = c(4, (n, o) => {
    r(n, l),
      f(n, [
        o,
        function (n) {
          return n;
        },
      ]);
  }),
  k = n("a2", (n) =>
    i(
      n[1],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          g(n, !o);
        };
      })(n),
    ),
  ),
  g = c(3, (n, o) => {
    e(n[0], "hidden", !o), r(n, k);
  });
d();
