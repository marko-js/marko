// size: 458 (min) 272 (brotli)

import {
  register as n,
  createRendererWithOwner as o,
  dynamicTagAttrs as t,
  on as c,
  state as s,
  queueEffect as a,
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
  p = n("a1", (n) =>
    c(
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
  f = s(
    2,
    (n, o) => {
      a(n, p), e(n, o || l(n));
    },
    () => e,
  );
m();
