// size: 567 (min) 301 (brotli)

import {
  registerRenderer as n,
  createRenderer as o,
  register as t,
  on as c,
  closure as i,
  data as r,
  queueSource as u,
  value as a,
  queueEffect as m,
  inConditionalScope as s,
  conditional as e,
  init as l,
} from "@marko/runtime-tags/dom";
const f = i(4, (n, o) => r(n[0], o)),
  k = n(
    "a0",
    o("The count is <!>", "b%", void 0, () => [f]),
  ),
  d = e(2),
  b = t("a1", (n) =>
    c(
      n[0],
      "click",
      ((n) => {
        const { 4: o } = n;
        return function () {
          u(n, g, o + 1);
        };
      })(n),
    ),
  ),
  g = a(
    4,
    (n, o) => m(n, b),
    () => s(f, 2),
  ),
  h = t("a2", (n) =>
    c(
      n[1],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          u(n, p, !o);
        };
      })(n),
    ),
  ),
  p = a(
    3,
    (n, o) => {
      m(n, h), d(n, o ? k : null);
    },
    () => d,
  );
l();
