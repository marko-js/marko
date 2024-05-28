// size: 380 (min) 239 (brotli)

import {
  register as n,
  createRenderer as o,
  dynamicTagAttrs as t,
  on as c,
  queueSource as r,
  value as i,
  queueEffect as m,
  conditional as d,
  init as u,
} from "@marko/runtime-tags/dom";
const e = n("c", o("Body Content", "")),
  l = t(0, e),
  s = d(0, (n) => l(n, () => ({})), l),
  a = n("d", (n) =>
    c(
      n[1],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          r(n, f, o ? null : "div");
        };
      })(n),
    ),
  ),
  f = i(
    2,
    (n, o) => {
      m(n, a), s(n, o || e);
    },
    s,
  );
u();
