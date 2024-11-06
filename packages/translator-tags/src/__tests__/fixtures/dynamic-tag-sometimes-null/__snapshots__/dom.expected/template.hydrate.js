// size: 380 (min) 245 (brotli)

import {
  register as n,
  createRendererWithOwner as o,
  dynamicTagAttrs as t,
  effect as r,
  on as c,
  state as i,
  conditional as m,
  init as a,
} from "@marko/runtime-tags/dom";
const u = n("a0", o("Body Content", "")),
  d = t(0, u),
  e = m(
    0,
    (n) => d(n, () => ({})),
    () => d,
  ),
  l = r("a1", (n) =>
    c(
      n[1],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          s(n, o ? null : "div");
        };
      })(n),
    ),
  ),
  s = i(
    2,
    (n, o) => {
      l(n), e(n, o || u(n));
    },
    () => e,
  );
a();
