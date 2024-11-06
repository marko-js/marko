// size: 353 (min) 202 (brotli)

import {
  register as n,
  effect as t,
  on as o,
  state as r,
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
  f = t("a1", (n) =>
    o(
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
  s = r(3, (n, t) => {
    f(n), e(n, m(t));
  });
i();
