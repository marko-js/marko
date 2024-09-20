// size: 488 (min) 276 (brotli)

import {
  register as n,
  getAbortSignal as o,
  createRenderer as r,
  on as t,
  resetAbortSignal as i,
  queueEffect as d,
  queueSource as e,
  value as a,
  conditional as c,
  init as m,
} from "@marko/runtime-tags/dom";
const u = n("a0", (n) => {
    (n._[1].innerHTML += "\nmounted"),
      (o(n, 0).onabort = () => {
        n._[1].innerHTML += "\ndestroyed";
      });
  }),
  l = n(
    "a1",
    r("<div>child</div>", "", (n) => {
      i(n, 0), d(n, u);
    }),
  ),
  s = c(2),
  f = n("a2", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          e(n, k, !o);
        };
      })(n),
    ),
  ),
  k = a(3, (n, o) => {
    d(n, f), s(n, o ? l : null);
  });
m();
