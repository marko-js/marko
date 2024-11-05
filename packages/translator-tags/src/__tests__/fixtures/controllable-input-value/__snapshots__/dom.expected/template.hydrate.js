// size: 275 (min) 161 (brotli)

import {
  register as o,
  queueSource as m,
  value as t,
  controllable_input_value as a,
  data as n,
  controllable_input_value_effect as r,
  init as i,
} from "@marko/runtime-tags/dom";
const c = o(
    "a0",
    (o) =>
      function (t) {
        m(o, f, t);
      },
  ),
  f = t(2, (o, m) => {
    a(o, 0, m, c(o)), n(o[1], m);
  });
o("a1", (o) => r(o, 0)), i();
