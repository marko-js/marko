// size: 332 (min) 191 (brotli)

import {
  register as o,
  on as t,
  queueSource as n,
  value as r,
  queueEffect as c,
  data as m,
  init as a,
} from "@marko/runtime-tags/dom";
const i = r(5, (o, t) => {
    m(o[1], t),
      ((o, t) => {
        m(o[2], t);
      })(o, t);
  }),
  s = r(4, (o, t) => i(o, t.a)),
  u = o("d", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          n(o, d, t + 1);
        };
      })(o),
    ),
  ),
  d = r(3, (o, t) => {
    c(o, u), s(o, { a: t });
  });
a();
