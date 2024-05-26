// size: 290 (min) 194 (brotli)

import {
  register as o,
  on as t,
  queueSource as n,
  value as r,
  data as c,
  queueEffect as m,
  init as i,
} from "@marko/runtime-tags/dom";
const s = o("T5JUEJ9T", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          n(o, u, t + 1);
        };
      })(o),
    ),
  ),
  u = r(3, (o, t) => {
    c(o[1], t), c(o[2], `${t} + ${t} = ${t + t}`), m(o, s);
  });
i();
