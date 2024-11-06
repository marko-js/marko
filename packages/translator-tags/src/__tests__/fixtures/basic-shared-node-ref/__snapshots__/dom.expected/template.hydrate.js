// size: 561 (min) 322 (brotli)

import {
  register as n,
  createRenderer as o,
  effect as i,
  on as t,
  value as c,
  state as r,
  attr as e,
  data as u,
  loopOf as a,
  init as d,
} from "@marko/runtime-tags/dom";
const m = c(2, (n, o) => u(n[0], o)),
  s = c(1, (n, o) => m(n, o[0])),
  f = a(
    0,
    n(
      "a0",
      o("<li> </li>", "D ", void 0, void 0, void 0, () => s),
    ),
  ),
  l = i("a1", (n) =>
    t(
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
  v = r(4, (n, o) => {
    l(n),
      f(n, [
        o,
        function (n) {
          return n;
        },
      ]);
  }),
  k = i("a2", (n) =>
    t(
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
  g = r(3, (n, o) => {
    e(n[0], "hidden", !o), k(n);
  });
d();
