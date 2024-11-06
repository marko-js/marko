// size: 433 (min) 256 (brotli)

import {
  register as n,
  createRenderer as o,
  effect as t,
  on as a,
  closure as r,
  data as c,
  state as i,
  conditional as l,
  inConditionalScope as m,
  init as s,
} from "@marko/runtime-tags/dom";
const u = r(3, (n, o) => c(n[0], o)),
  e = n(
    "a0",
    o("<span> </span>", "D ", void 0, () => [u]),
  ),
  p = l(1),
  d = i(3, null, () => m(u, 1)),
  f = t("a1", (n) =>
    a(
      n[0],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          d(n, "bye"), k(n, !o);
        };
      })(n),
    ),
  ),
  k = i(
    2,
    (n, o) => {
      f(n), p(n, o ? e : null);
    },
    () => p,
  );
s();
