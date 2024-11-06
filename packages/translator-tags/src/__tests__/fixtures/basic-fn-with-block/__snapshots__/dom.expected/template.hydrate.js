// size: 213 (min) 159 (brotli)

import {
  effect as o,
  on as t,
  state as n,
  data as r,
  init as c,
} from "@marko/runtime-tags/dom";
const m = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 2: t } = o;
        return function () {
          i(o, t + 1);
        };
      })(o),
    ),
  ),
  i = n(2, (o, t) => {
    r(o[1], t), m(o);
  });
c();
