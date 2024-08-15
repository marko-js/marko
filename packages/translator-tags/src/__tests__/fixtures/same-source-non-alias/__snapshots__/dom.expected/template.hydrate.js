// size: 333 (min) 192 (brotli)

import {
  register as o,
  on as t,
  queueSource as n,
  value as r,
  queueEffect as a,
  data as c,
  init as m,
} from "@marko/runtime-tags/dom";
const i = r(5, (o, t) => {
    c(o[1], t),
      ((o, t) => {
        c(o[2], t);
      })(o, t);
  }),
  s = r(4, (o, t) => i(o, t.a)),
  u = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          n(o, e, t + 1);
        };
      })(o),
    ),
  ),
  e = r(3, (o, t) => {
    a(o, u), s(o, { a: t });
  });
m();
