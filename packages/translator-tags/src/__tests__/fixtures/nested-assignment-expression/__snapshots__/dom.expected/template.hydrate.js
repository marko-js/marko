// size: 310 (min) 188 (brotli)

import {
  register as o,
  on as t,
  state as n,
  data as c,
  queueEffect as r,
  init as m,
} from "@marko/runtime-tags/dom";
const i = n(6, (o, t) => c(o[3], t)),
  s = n(5, (o, t) => c(o[2], t)),
  a = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 4: t } = o;
        return function () {
          const n = s(o, (u(o, t + 1), t));
          i(o, n);
        };
      })(o),
    ),
  ),
  u = n(4, (o, t) => {
    c(o[1], t), r(o, a);
  });
m();
