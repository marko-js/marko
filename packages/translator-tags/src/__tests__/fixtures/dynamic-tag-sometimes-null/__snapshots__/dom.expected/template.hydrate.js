// size: 394 (min) 240 (brotli)

import {
  register as n,
  createRenderer as o,
  dynamicTagAttrs as t,
  on as r,
  queueSource as c,
  value as i,
  queueEffect as m,
  conditional as a,
  init as u,
} from "@marko/runtime-tags/dom";
const d = n("a0", o("Body Content", "")),
  e = t(0, d),
  l = a(
    0,
    (n) => e(n, () => ({})),
    () => e,
  ),
  s = n("a1", (n) =>
    r(
      n[1],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          c(n, f, o ? null : "div");
        };
      })(n),
    ),
  ),
  f = i(
    2,
    (n, o) => {
      m(n, s), l(n, o || d);
    },
    () => l,
  );
u();
