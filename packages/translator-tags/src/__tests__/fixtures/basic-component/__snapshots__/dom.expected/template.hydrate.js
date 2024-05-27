// size: 252 (min) 160 (brotli)

import {
  register as o,
  on as t,
  queueSource as n,
  value as r,
  data as c,
  queueEffect as m,
  init as i,
} from "@marko/runtime-tags/dom";
const s = o("d", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 2: t } = o;
        return function () {
          n(o, u, t + 1);
        };
      })(o),
    ),
  ),
  u = r(2, (o, t) => {
    c(o[1], t), m(o, s);
  });
i();
