// size: 478 (min) 268 (brotli)

import {
  effect as n,
  getAbortSignal as o,
  register as r,
  createRenderer as t,
  on as a,
  resetAbortSignal as i,
  state as e,
  conditional as c,
  init as d,
} from "@marko/runtime-tags/dom";
const m = n("a0", (n) => {
    (n._[1].innerHTML += "\nmounted"),
      (o(n, 0).onabort = () => {
        n._[1].innerHTML += "\ndestroyed";
      });
  }),
  s = r(
    "a1",
    t("<div>a</div><span>b</span><p>c</p>", "", (n) => {
      i(n, 0), m(n);
    }),
  ),
  p = c(2),
  u = n("a2", (n) =>
    a(
      n[0],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          l(n, !o);
        };
      })(n),
    ),
  ),
  l = e(3, (n, o) => {
    u(n), p(n, o ? s : null);
  });
d();
