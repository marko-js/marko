// size: 259 (min) 168 (brotli)

import {
  register as o,
  on as t,
  queueSource as n,
  value as r,
  data as c,
  queueEffect as m,
  init as i,
} from "@marko/runtime-tags/dom";
const a = o("W/hwTayC", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 2: t } = o;
        return function () {
          n(o, s, t + 1);
        };
      })(o),
    ),
  ),
  s = r(2, (o, t) => {
    c(o[1], t), m(o, a);
  });
i();
