// size: 267 (min) 169 (brotli)

import {
  register as o,
  on as t,
  state as n,
  data as r,
  queueEffect as c,
  init as m,
} from "@marko/runtime-tags/dom";
const i = n(4, (o, t) => r(o[2], t)),
  a = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          i(o, t), s(o, t + 1);
        };
      })(o),
    ),
  ),
  s = n(3, (o, t) => {
    r(o[1], t), c(o, a);
  });
m();
