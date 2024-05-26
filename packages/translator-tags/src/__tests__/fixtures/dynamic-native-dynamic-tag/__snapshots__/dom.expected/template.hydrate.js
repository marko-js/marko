// size: 453 (min) 282 (brotli)

import {
  register as n,
  createRenderer as o,
  dynamicTagAttrs as t,
  on as c,
  queueSource as s,
  value as m,
  queueEffect as r,
  conditional as a,
  intersection as i,
  init as l,
} from "@marko/runtime-tags/dom";
const u = n("mEmzbrWW", o("body content", "")),
  d = t(0, u),
  e = a(
    0,
    null,
    i(2, (n) => {
      const { 3: o } = n;
      d(n, () => ({ class: o }));
    }),
  ),
  p = n("1V70385H", (n) =>
    c(
      n[1],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          s(n, b, "span" === o ? "div" : "span");
        };
      })(n),
    ),
  ),
  b = m(
    2,
    (n, o) => {
      r(n, p), e(n, o || u);
    },
    e,
  );
l();
