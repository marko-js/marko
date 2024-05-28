// size: 332 (min) 196 (brotli)

import {
  register as o,
  on as t,
  queueSource as c,
  value as n,
  data as r,
  queueEffect as m,
  init as i,
} from "@marko/runtime-tags/dom";
const s = n(6, (o, t) => r(o[3], t)),
  u = n(5, (o, t) => r(o[2], t)),
  a = o("c", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 4: t } = o;
        return function () {
          const n = c(o, u, (c(o, e, t + 1), t));
          c(o, s, n);
        };
      })(o),
    ),
  ),
  e = n(4, (o, t) => {
    r(o[1], t), m(o, a);
  });
i();
