// size: 443 (min) 279 (brotli)

import {
  register as n,
  createRenderer as o,
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
  e = i(
    0,
    null,
    m(
      2,
      (n) => {
        const { 3: o } = n;
        d(n, () => ({ class: o }));
      },
      d,
    ),
  ),
  p = n("a1", (n) =>
    c(
      n[1],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          s(n, f, "span" === o ? "div" : "span");
        };
      })(n),
    ),
  ),
  f = a(
    2,
    (n, o) => {
      r(n, p), e(n, o || u);
    },
    e,
  );
l();
