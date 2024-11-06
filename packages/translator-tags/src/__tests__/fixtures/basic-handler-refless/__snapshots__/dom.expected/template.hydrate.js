// size: 176 (min) 134 (brotli)

import {
  register as o,
  on as m,
  state as t,
  data as c,
  init as i,
} from "@marko/runtime-tags/dom";
const n = t(2, (o, m) => c(o[1], m));
o("a0", (o) =>
  m(o[0], "click", function () {
    n(o, 1);
  }),
),
  i();
