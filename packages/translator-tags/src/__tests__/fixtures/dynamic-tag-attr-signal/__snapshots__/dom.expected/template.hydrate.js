// size: 230 (min) 157 (brotli)

import {
  effect as o,
  on as t,
  state as n,
  classAttr as r,
  init as c,
} from "@marko/runtime-tags/dom";
const m = o("a0", (o) =>
    t(
      o[1],
      "click",
      ((o) => {
        const { 2: t } = o;
        return function () {
          i(o, "A" === t ? "B" : "A");
        };
      })(o),
    ),
  ),
  i = n(2, (o, t) => {
    r(o[0], t), m(o);
  });
c();
