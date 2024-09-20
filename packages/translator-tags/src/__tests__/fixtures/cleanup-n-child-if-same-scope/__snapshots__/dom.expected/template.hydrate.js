// size: 506 (min) 301 (brotli)

import {
  register as n,
  getAbortSignal as o,
  createRenderer as r,
  on as t,
  resetAbortSignal as a,
  queueEffect as i,
  queueSource as e,
  value as c,
  conditional as d,
  init as m,
} from "@marko/runtime-tags/dom";
const s = n("a0", (n) => {
    (n._[1].innerHTML += "\nmounted"),
      (o(n, 0).onabort = () => {
        n._[1].innerHTML += "\ndestroyed";
      });
  }),
  p = n(
    "a1",
    r("<div>a</div><span>b</span><p>c</p>", "", (n) => {
      a(n, 0), i(n, s);
    }),
  ),
  u = d(2),
  l = n("a2", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          e(n, b, !o);
        };
      })(n),
    ),
  ),
  b = c(3, (n, o) => {
    i(n, l), u(n, o ? p : null);
  });
m();
