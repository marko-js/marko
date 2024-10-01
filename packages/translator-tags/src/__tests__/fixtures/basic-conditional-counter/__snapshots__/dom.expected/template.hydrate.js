// size: 565 (min) 296 (brotli)

import {
  registerRenderer as n,
  createRenderer as o,
  register as t,
  on as c,
  closure as r,
  data as a,
  queueSource as i,
  value as s,
  queueEffect as u,
  inConditionalScope as m,
  conditional as l,
  init as e,
} from "@marko/runtime-tags/dom";
const f = r(4, (n, o) => a(n[0], o)),
  k = n(
    "a0",
    o("<span> </span>", "D ", void 0, () => [f]),
  ),
  p = l(2),
  d = t("a1", (n) =>
    c(
      n[0],
      "click",
      ((n) => {
        const { 4: o } = n;
        return function () {
          i(n, g, o + 1);
        };
      })(n),
    ),
  ),
  g = s(
    4,
    (n, o) => u(n, d),
    () => m(f, 2),
  ),
  v = t("a2", (n) =>
    c(
      n[1],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          i(n, D, !o);
        };
      })(n),
    ),
  ),
  D = s(
    3,
    (n, o) => {
      u(n, v), p(n, o ? k : null);
    },
    () => p,
  );
e();
