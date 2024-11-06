// size: 265 (min) 180 (brotli)

import {
  register as o,
  on as t,
  state as n,
  data as r,
  queueEffect as c,
  init as m,
} from "@marko/runtime-tags/dom";
const i = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          a(o, t + 1);
        };
      })(o),
    ),
  ),
  a = n(3, (o, t) => {
    r(o[1], t), r(o[2], `${t} + ${t} = ${t + t}`), c(o, i);
  });
m();
