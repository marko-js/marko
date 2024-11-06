// size: 234 (min) 171 (brotli)

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
        const { 2: t } = o;
        return function () {
          a(o, t + 1);
        };
      })(o),
    ),
  ),
  a = n(2, (o, t) => {
    r(o[1], t), c(o, i);
  });
m();
