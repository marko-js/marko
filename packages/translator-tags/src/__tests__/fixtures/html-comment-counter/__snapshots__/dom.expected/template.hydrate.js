// size: 283 (min) 185 (brotli)

import {
  register as o,
  on as t,
  queueSource as c,
  value as n,
  data as r,
  queueEffect as m,
  init as i,
} from "@marko/runtime-tags/dom";
const s = o("c", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          c(o, u, t + 1);
        };
      })(o),
    ),
  ),
  u = n(3, (o, t) => {
    r(o[1], t), r(o[2], `${t} + ${t} = ${t + t}`), m(o, s);
  });
i();
