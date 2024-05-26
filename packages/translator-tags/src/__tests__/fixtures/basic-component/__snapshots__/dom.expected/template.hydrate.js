// size: 259 (min) 177 (brotli)

import {
  register as o,
  on as r,
  queueSource as t,
  value as n,
  data as c,
  queueEffect as m,
  init as i,
} from "@marko/runtime-tags/dom";
const s = o("HqMrW1xz", (o) =>
    r(
      o[0],
      "click",
      ((o) => {
        const { 2: r } = o;
        return function () {
          t(o, u, r + 1);
        };
      })(o),
    ),
  ),
  u = n(2, (o, r) => {
    c(o[1], r), m(o, s);
  });
i();
