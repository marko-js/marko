// size: 270 (min) 162 (brotli)

import {
  register as o,
  state as m,
  controllable_select_value as t,
  data as a,
  effect as n,
  controllable_select_value_effect as r,
  init as i,
} from "@marko/runtime-tags/dom";
const c = o(
    "a0",
    (o) =>
      function (m) {
        f(o, m);
      },
  ),
  f = m(2, (o, m) => {
    t(o, 0, m, c(o)), a(o[1], m);
  });
n("a1", (o) => r(o, 0)), i();
