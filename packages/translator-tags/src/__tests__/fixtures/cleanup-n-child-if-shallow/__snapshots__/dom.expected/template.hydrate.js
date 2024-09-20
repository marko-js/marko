// size: 620 (min) 338 (brotli)

import {
  register as n,
  getAbortSignal as t,
  value as o,
  resetAbortSignal as r,
  queueEffect as i,
  createRenderer as e,
  on as c,
  queueSource as s,
  conditional as a,
  init as d,
} from "@marko/runtime-tags/dom";
const u = n("a0", (n) => {
    const { 1: o } = n;
    o.write("mounted"),
      (t(n, 0).onabort = ((n) => {
        const { 1: t } = n;
        return () => {
          t.write("destroyed");
        };
      })(n));
  }),
  m = o(1, (n, t) => {
    r(n, 0), i(n, u);
  }),
  b = n(
    "b0",
    (n) =>
      function (t) {
        n._[1].innerHTML = t;
      },
  ),
  p = n(
    "b1",
    e("<div>a</div><span>b</span><p>c</p>", "/d&", (n) => {
      n[0], m(n[0], { write: b(n) });
    }),
  ),
  f = a(2),
  l = n("b2", (n) =>
    c(
      n[0],
      "click",
      ((n) => {
        const { 3: t } = n;
        return function () {
          s(n, w, !t);
        };
      })(n),
    ),
  ),
  w = o(3, (n, t) => {
    i(n, l), f(n, t ? p : null);
  });
d();
