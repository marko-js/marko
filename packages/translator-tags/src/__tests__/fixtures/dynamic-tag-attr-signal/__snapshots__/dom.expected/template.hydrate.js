// size: 276 (min) 179 (brotli)

import {
  register as o,
  on as t,
  queueSource as c,
  value as m,
  classAttr as n,
  queueEffect as r,
  init as i,
} from "@marko/runtime-tags/dom";
const s = o("iDj/cm4C", (o) =>
    t(
      o[1],
      "click",
      ((o) => {
        const { 2: t } = o;
        return function () {
          c(o, u, "A" === t ? "B" : "A");
        };
      })(o),
    ),
  ),
  u = m(2, (o, t) => {
    n(o[0], t), r(o, s);
  });
i();
