// size: 545 (min) 288 (brotli)

import {
  register as n,
  createRenderer as o,
  on as t,
  closure as c,
  data as i,
  queueSource as r,
  value as u,
  queueEffect as a,
  inConditionalScope as m,
  conditional as s,
  init as e,
} from "@marko/runtime-tags/dom";
const l = c(4, (n, o) => i(n[0], o)),
  f = n(
    "a0",
    o("The count is <!>", "b%", void 0, () => [l]),
  ),
  k = s(2),
  d = n("a1", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 4: o } = n;
        return function () {
          r(n, b, o + 1);
        };
      })(n),
    ),
  ),
  b = u(
    4,
    (n, o) => a(n, d),
    () => m(l, 2),
  ),
  g = n("a2", (n) =>
    t(
      n[1],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          r(n, h, !o);
        };
      })(n),
    ),
  ),
  h = u(
    3,
    (n, o) => {
      a(n, g), k(n, o ? f : null);
    },
    () => k,
  );
e();
