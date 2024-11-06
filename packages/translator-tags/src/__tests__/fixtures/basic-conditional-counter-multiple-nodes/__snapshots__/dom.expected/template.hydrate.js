// size: 515 (min) 277 (brotli)

import {
  register as n,
  createRenderer as o,
  effect as t,
  on as c,
  closure as i,
  data as r,
  state as u,
  inConditionalScope as a,
  conditional as m,
  init as s,
} from "@marko/runtime-tags/dom";
const e = i(4, (n, o) => r(n[0], o)),
  l = n(
    "a0",
    o("The count is <!>", "b%", void 0, () => [e]),
  ),
  f = m(2),
  k = t("a1", (n) =>
    c(
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
  d = u(
    4,
    (n, o) => k(n),
    () => a(e, 2),
  ),
  b = t("a2", (n) =>
    c(
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
  g = u(
    3,
    (n, o) => {
      b(n), f(n, o ? l : null);
    },
    () => f,
  );
s();
