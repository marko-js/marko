// size: 288 (min) 178 (brotli)

import {
  register as o,
  on as t,
  queueSource as n,
  value as r,
  data as c,
  queueEffect as m,
  init as i,
} from "@marko/runtime-tags/dom";
const a = r(4, (o, t) => c(o[2], t)),
  s = o("a1", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          n(o, a, t), n(o, u, t + 1);
        };
      })(o),
    ),
  ),
  u = r(3, (o, t) => {
    c(o[1], t), m(o, s);
  });
i();
