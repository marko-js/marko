// size: 360 (min) 205 (brotli)

import {
  register as n,
  on as t,
  state as o,
  queueEffect as r,
  value as a,
  data as c,
  init as i,
} from "@marko/runtime-tags/dom";
function m(n) {
  return { a: n };
}
n("a0", m);
const u = a(5, (n, t) => {
    c(n[1], t),
      ((n, t) => {
        c(n[2], t);
      })(n, t);
  }),
  e = a(4, (n, t) => u(n, t.a)),
  f = n("a1", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 3: t } = n;
        return function () {
          s(n, t + 1);
        };
      })(n),
    ),
  ),
  s = o(3, (n, t) => {
    r(n, f), e(n, m(t));
  });
i();
