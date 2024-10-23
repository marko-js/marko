// size: 258 (min) 166 (brotli)

import {
  register as o,
  queueSource as t,
  value as m,
  checkedAttr as n,
  data as r,
  checkedChangeEffect as a,
  init as i,
} from "@marko/runtime-tags/dom";
const c = o(
    "a0",
    (o) =>
      function (m) {
        t(o, f, m);
      },
  ),
  f = m(2, (o, t) => {
    n(o, 0, t, c(o)), r(o[1], String(t));
  });
o("a1", (o) => a(o, 0)), i();
