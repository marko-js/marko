// size: 195 (min) 132 (brotli)

import {
  register as o,
  on as m,
  queueSource as t,
  value as c,
  data as i,
  init as n,
} from "@marko/runtime-tags/dom";
const r = c(2, (o, m) => i(o[1], m));
o("a0", (o) =>
  m(o[0], "click", function () {
    t(o, r, 1);
  }),
),
  n();
