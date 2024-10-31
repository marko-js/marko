// size: 461 (min) 278 (brotli)

import {
  register as n,
  createRenderer as o,
  on as t,
  closure as a,
  data as r,
  queueSource as c,
  value as i,
  queueEffect as l,
  conditional as m,
  inConditionalScope as s,
  init as u,
} from "@marko/runtime-tags/dom";
const e = a(3, (n, o) => r(n[0], o)),
  p = n(
    "a0",
    o("<span> </span>", "D ", void 0, () => [e]),
  ),
  d = m(1),
  f = i(3, null, () => s(e, 1)),
  k = n("a1", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          c(n, f, "bye"), c(n, b, !o);
        };
      })(n),
    ),
  ),
  b = i(
    2,
    (n, o) => {
      l(n, k), d(n, o ? p : null);
    },
    () => d,
  );
u();
