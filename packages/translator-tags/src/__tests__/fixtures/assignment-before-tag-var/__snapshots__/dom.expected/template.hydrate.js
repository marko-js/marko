// size: 246 (min) 158 (brotli)

import {
  effect as o,
  on as t,
  state as n,
  data as r,
  init as c,
} from "@marko/runtime-tags/dom";
const m = n(4, (o, t) => r(o[2], t)),
  i = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          m(o, t), a(o, t + 1);
        };
      })(o),
    ),
  ),
  a = n(3, (o, t) => {
    r(o[1], t), i(o);
  });
c();
