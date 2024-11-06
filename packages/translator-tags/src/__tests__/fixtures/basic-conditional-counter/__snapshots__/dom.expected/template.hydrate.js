// size: 522 (min) 271 (brotli)

import {
  register as n,
  createRenderer as o,
  on as t,
  closure as c,
  data as r,
  state as a,
  queueEffect as i,
  inConditionalScope as s,
  conditional as u,
  init as m,
} from "@marko/runtime-tags/dom";
const l = c(4, (n, o) => r(n[0], o)),
  e = n(
    "a0",
    o("<span> </span>", "D ", void 0, () => [l]),
  ),
  f = u(2),
  k = n("a1", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 4: o } = n;
        return function () {
          p(n, o + 1);
        };
      })(n),
    ),
  ),
  p = a(
    4,
    (n, o) => i(n, k),
    () => s(l, 2),
  ),
  d = n("a2", (n) =>
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
  g = a(
    3,
    (n, o) => {
      i(n, d), f(n, o ? e : null);
    },
    () => f,
  );
m();
