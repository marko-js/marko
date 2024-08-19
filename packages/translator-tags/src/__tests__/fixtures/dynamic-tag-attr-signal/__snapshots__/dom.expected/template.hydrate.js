// size: 270 (min) 180 (brotli)

import {
  register as o,
  on as t,
  queueSource as n,
  value as r,
  classAttr as c,
  queueEffect as m,
  init as i,
} from "@marko/runtime-tags/dom";
const a = o("a0", (o) =>
    t(
      o[1],
      "click",
      ((o) => {
        const { 2: t } = o;
        return function () {
          n(o, s, "A" === t ? "B" : "A");
        };
      })(o),
    ),
  ),
  s = r(2, (o, t) => {
    c(o[0], t), m(o, a);
  });
i();
