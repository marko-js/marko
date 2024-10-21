// size: 543 (min) 284 (brotli)

import {
  register as n,
  createRenderer as o,
  on as t,
  closure as c,
  data as r,
  queueSource as a,
  value as i,
  queueEffect as s,
  inConditionalScope as u,
  conditional as m,
  init as l,
} from "@marko/runtime-tags/dom";
const e = c(4, (n, o) => r(n[0], o)),
  f = n(
    "a0",
    o("<span> </span>", "D ", void 0, () => [e]),
  ),
  k = m(2),
  p = n("a1", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 4: o } = n;
        return function () {
          a(n, d, o + 1);
        };
      })(n),
    ),
  ),
  d = i(
    4,
    (n, o) => s(n, p),
    () => u(e, 2),
  ),
  g = n("a2", (n) =>
    t(
      n[1],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          a(n, v, !o);
        };
      })(n),
    ),
  ),
  v = i(
    3,
    (n, o) => {
      s(n, g), k(n, o ? f : null);
    },
    () => k,
  );
l();
