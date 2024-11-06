// size: 524 (min) 279 (brotli)

import {
  register as n,
  createRenderer as o,
  on as t,
  closure as c,
  data as i,
  state as r,
  queueEffect as u,
  inConditionalScope as a,
  conditional as m,
  init as s,
} from "@marko/runtime-tags/dom";
const e = c(4, (n, o) => i(n[0], o)),
  l = n(
    "a0",
    o("The count is <!>", "b%", void 0, () => [e]),
  ),
  f = m(2),
  k = n("a1", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 4: o } = n;
        return function () {
          d(n, o + 1);
        };
      })(n),
    ),
  ),
  d = r(
    4,
    (n, o) => u(n, k),
    () => a(e, 2),
  ),
  b = n("a2", (n) =>
    t(
      n[1],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          g(n, !o);
        };
      })(n),
    ),
  ),
  g = r(
    3,
    (n, o) => {
      u(n, b), f(n, o ? l : null);
    },
    () => f,
  );
s();
