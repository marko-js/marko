// size: 368 (min) 202 (brotli)

import {
  register as n,
  on as t,
  queueSource as o,
  value as r,
  queueEffect as a,
  data as c,
  init as i,
} from "@marko/runtime-tags/dom";
function m(n) {
  return { a: n };
}
n("a0", m);
const u = r(5, (n, t) => {
    c(n[1], t),
      ((n, t) => {
        c(n[2], t);
      })(n, t);
  }),
  e = r(4, (n, t) => u(n, t.a)),
  f = n("a1", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 3: t } = n;
        return function () {
          o(n, s, t + 1);
        };
      })(n),
    ),
  ),
  s = r(3, (n, t) => {
    a(n, f), e(n, m(t));
  });
i();
