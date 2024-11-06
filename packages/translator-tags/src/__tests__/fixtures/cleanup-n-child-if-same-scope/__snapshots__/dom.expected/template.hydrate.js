// size: 487 (min) 273 (brotli)

import {
  register as n,
  getAbortSignal as o,
  createRenderer as r,
  on as t,
  resetAbortSignal as a,
  queueEffect as i,
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
  s = n(
    "a1",
    r("<div>a</div><span>b</span><p>c</p>", "", (n) => {
      a(n, 0), i(n, m);
    }),
  ),
  p = c(2),
  u = n("a2", (n) =>
    t(
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
    i(n, u), p(n, o ? s : null);
  });
d();
