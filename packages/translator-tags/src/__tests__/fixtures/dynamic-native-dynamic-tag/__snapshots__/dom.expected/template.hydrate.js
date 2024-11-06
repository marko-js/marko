// size: 451 (min) 280 (brotli)

import {
  register as n,
  createRendererWithOwner as o,
  dynamicTagAttrs as t,
  effect as c,
  on as s,
  state as a,
  conditional as r,
  intersection as i,
  init as m,
} from "@marko/runtime-tags/dom";
const l = n("a0", o("body content", "")),
  u = t(0, l),
  d = i(
    2,
    (n) => {
      const { 3: o } = n;
      u(n, () => ({ class: o }));
    },
    () => u,
  ),
  e = r(0, null, () => d),
  p = c("a1", (n) =>
    s(
      n[1],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          f(n, "span" === o ? "div" : "span");
        };
      })(n),
    ),
  ),
  f = a(
    2,
    (n, o) => {
      p(n), e(n, o || l(n));
    },
    () => e,
  );
m();
