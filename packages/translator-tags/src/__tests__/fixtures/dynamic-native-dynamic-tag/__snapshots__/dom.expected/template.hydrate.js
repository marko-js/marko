// size: 477 (min) 291 (brotli)

import {
  register as n,
  createRendererWithOwner as o,
  dynamicTagAttrs as t,
  on as c,
  queueSource as s,
  value as a,
  queueEffect as r,
  conditional as i,
  intersection as m,
  init as l,
} from "@marko/runtime-tags/dom";
const u = n("a0", o("body content", "")),
  d = t(0, u),
  e = m(
    2,
    (n) => {
      const { 3: o } = n;
      d(n, () => ({ class: o }));
    },
    () => d,
  ),
  p = i(0, null, () => e),
  f = n("a1", (n) =>
    c(
      n[1],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          s(n, k, "span" === o ? "div" : "span");
        };
      })(n),
    ),
  ),
  k = a(
    2,
    (n, o) => {
      r(n, f), p(n, o || u(n));
    },
    () => p,
  );
l();
