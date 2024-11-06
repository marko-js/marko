// size: 387 (min) 251 (brotli)

import {
  register as n,
  createRendererWithOwner as o,
  dynamicTagAttrs as t,
  on as r,
  state as c,
  queueEffect as i,
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
  l = n("a1", (n) =>
    r(
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
  s = c(
    2,
    (n, o) => {
      i(n, l), e(n, o || u(n));
    },
    () => e,
  );
a();
