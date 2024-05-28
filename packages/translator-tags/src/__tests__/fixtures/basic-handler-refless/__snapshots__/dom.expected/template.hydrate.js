// size: 200 (min) 131 (brotli)

import {
  register as o,
  on as c,
  queueSource as m,
  value as t,
  data as i,
  init as n,
} from "@marko/runtime-tags/dom";
const r = t(2, (o, c) => i(o[1], c));
o("c", (o) =>
  c(
    o[0],
    "click",
    ((o) =>
      function () {
        m(o, r, 1);
      })(o),
  ),
),
  n();
