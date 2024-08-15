// size: 342 (min) 212 (brotli)

import {
  register as o,
  on as t,
  queueSource as n,
  value as r,
  queueEffect as c,
  intersection as m,
  data as i,
  init as a,
} from "@marko/runtime-tags/dom";
const s = m(2, (o) => {
    const { 3: t, 4: n } = o;
    i(o[1], t.format(n));
  }),
  e = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 4: t } = o;
        return function () {
          n(o, f, t + 1);
        };
      })(o),
    ),
  ),
  f = r(4, (o, t) => c(o, e), s);
o("b0", (o) => "$" + o.toFixed(2)), a();
