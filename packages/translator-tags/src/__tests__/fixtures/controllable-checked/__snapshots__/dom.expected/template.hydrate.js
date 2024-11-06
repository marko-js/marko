// size: 280 (min) 165 (brotli)

import {
  register as o,
  state as t,
  controllable_input_checked as m,
  data as n,
  effect as r,
  controllable_input_checked_effect as a,
  init as i,
} from "@marko/runtime-tags/dom";
const c = o(
    "a0",
    (o) =>
      function (t) {
        f(o, t);
      },
  ),
  f = t(2, (o, t) => {
    m(o, 0, t, c(o)), n(o[1], String(t));
  });
r("a1", (o) => a(o, 0)), i();
