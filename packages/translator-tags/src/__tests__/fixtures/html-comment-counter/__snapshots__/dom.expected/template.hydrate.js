// size: 244 (min) 165 (brotli)

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
        const { 3: t } = o;
        return function () {
          i(o, t + 1);
        };
      })(o),
    ),
  ),
  i = n(3, (o, t) => {
    r(o[1], t), r(o[2], `${t} + ${t} = ${t + t}`), m(o);
  });
c();
