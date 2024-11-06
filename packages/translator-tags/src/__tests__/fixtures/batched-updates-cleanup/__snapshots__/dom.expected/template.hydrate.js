// size: 440 (min) 260 (brotli)

import {
  register as n,
  createRenderer as o,
  on as t,
  closure as a,
  data as r,
  state as c,
  queueEffect as i,
  conditional as l,
  inConditionalScope as m,
  init as s,
} from "@marko/runtime-tags/dom";
const u = a(3, (n, o) => r(n[0], o)),
  e = n(
    "a0",
    o("<span> </span>", "D ", void 0, () => [u]),
  ),
  p = l(1),
  d = c(3, null, () => m(u, 1)),
  f = n("a1", (n) =>
    t(
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
  k = c(
    2,
    (n, o) => {
      i(n, f), p(n, o ? e : null);
    },
    () => p,
  );
s();
