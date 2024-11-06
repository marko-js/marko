// size: 513 (min) 272 (brotli)

import {
  register as n,
  createRenderer as o,
  effect as t,
  on as c,
  closure as r,
  data as a,
  state as i,
  inConditionalScope as s,
  conditional as u,
  init as m,
} from "@marko/runtime-tags/dom";
const l = r(4, (n, o) => a(n[0], o)),
  e = n(
    "a0",
    o("<span> </span>", "D ", void 0, () => [l]),
  ),
  f = u(2),
  k = t("a1", (n) =>
    c(
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
  p = i(
    4,
    (n, o) => k(n),
    () => s(l, 2),
  ),
  d = t("a2", (n) =>
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
  g = i(
    3,
    (n, o) => {
      d(n), f(n, o ? e : null);
    },
    () => f,
  );
m();
