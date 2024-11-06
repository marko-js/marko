// size: 251 (min) 166 (brotli)

import {
  register as o,
  on as t,
  state as n,
  classAttr as r,
  queueEffect as c,
  init as m,
} from "@marko/runtime-tags/dom";
const i = o("a0", (o) =>
    t(
      o[1],
      "click",
      ((o) => {
        const { 2: t } = o;
        return function () {
          a(o, "A" === t ? "B" : "A");
        };
      })(o),
    ),
  ),
  a = n(2, (o, t) => {
    r(o[0], t), c(o, i);
  });
m();
