// size: 284 (min) 184 (brotli)

import {
  register as o,
  on as t,
  queueSource as n,
  value as r,
  data as c,
  queueEffect as m,
  init as i,
} from "@marko/runtime-tags/dom";
const a = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          n(o, s, t + 1);
        };
      })(o),
    ),
  ),
  s = r(3, (o, t) => {
    c(o[1], t), c(o[2], `${t} + ${t} = ${t + t}`), m(o, a);
  });
i();
