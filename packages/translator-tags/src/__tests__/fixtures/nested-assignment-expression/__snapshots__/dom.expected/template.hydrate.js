// size: 333 (min) 199 (brotli)

import {
  register as o,
  on as t,
  queueSource as n,
  value as c,
  data as r,
  queueEffect as m,
  init as i,
} from "@marko/runtime-tags/dom";
const s = c(6, (o, t) => r(o[3], t)),
  a = c(5, (o, t) => r(o[2], t)),
  u = o("a1", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 4: t } = o;
        return function () {
          const c = n(o, a, (n(o, e, t + 1), t));
          n(o, s, c);
        };
      })(o),
    ),
  ),
  e = c(4, (o, t) => {
    r(o[1], t), m(o, u);
  });
i();
