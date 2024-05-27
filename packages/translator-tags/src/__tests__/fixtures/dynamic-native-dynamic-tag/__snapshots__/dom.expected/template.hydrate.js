// size: 439 (min) 273 (brotli)

import {
  register as n,
  createRenderer as o,
  dynamicTagAttrs as t,
  on as c,
  queueSource as s,
  value as r,
  queueEffect as a,
  conditional as i,
  intersection as m,
  init as d,
} from "@marko/runtime-tags/dom";
const l = n("c", o("body content", "")),
  u = t(0, l),
  e = i(
    0,
    null,
    m(2, (n) => {
      const { 3: o } = n;
      u(n, () => ({ class: o }));
    }),
  ),
  p = n("d", (n) =>
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
  f = r(
    2,
    (n, o) => {
      a(n, p), e(n, o || l);
    },
    e,
  );
d();
