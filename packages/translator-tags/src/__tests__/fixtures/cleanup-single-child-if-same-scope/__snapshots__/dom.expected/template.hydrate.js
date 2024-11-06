// size: 469 (min) 261 (brotli)

import {
  register as n,
  getAbortSignal as o,
  createRenderer as r,
  on as t,
  resetAbortSignal as i,
  queueEffect as d,
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
  u = n(
    "a1",
    r("<div>child</div>", "", (n) => {
      i(n, 0), d(n, m);
    }),
  ),
  l = a(2),
  s = n("a2", (n) =>
    t(
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
    d(n, s), l(n, o ? u : null);
  });
c();
