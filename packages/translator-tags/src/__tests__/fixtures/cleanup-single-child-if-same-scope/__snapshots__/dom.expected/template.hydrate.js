// size: 460 (min) 279 (brotli)

import {
  effect as n,
  getAbortSignal as o,
  register as r,
  createRenderer as t,
  on as i,
  resetAbortSignal as d,
  state as e,
  conditional as a,
  init as c,
} from "@marko/runtime-tags/dom";
const m = n("a0", (n) => {
    (n._[1].innerHTML += "\nmounted"),
      (o(n, 0).onabort = () => {
        n._[1].innerHTML += "\ndestroyed";
      });
  }),
  u = r(
    "a1",
    t("<div>child</div>", "", (n) => {
      d(n, 0), m(n);
    }),
  ),
  l = a(2),
  s = n("a2", (n) =>
    i(
      n[0],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          f(n, !o);
        };
      })(n),
    ),
  ),
  f = e(3, (n, o) => {
    s(n), l(n, o ? u : null);
  });
c();
