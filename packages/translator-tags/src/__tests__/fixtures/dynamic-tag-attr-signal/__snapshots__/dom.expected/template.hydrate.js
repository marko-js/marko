// size: 269 (min) 179 (brotli)

import {
  register as o,
  on as t,
  queueSource as c,
  value as n,
  classAttr as r,
  queueEffect as m,
  init as i,
} from "@marko/runtime-tags/dom";
const s = o("c", (o) =>
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
  u = n(2, (o, t) => {
    r(o[0], t), m(o, s);
  });
i();
