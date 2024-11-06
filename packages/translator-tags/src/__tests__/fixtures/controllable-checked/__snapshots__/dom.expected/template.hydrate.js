// size: 268 (min) 159 (brotli)

import {
  register as o,
  state as t,
  controllable_input_checked as m,
  data as n,
  controllable_input_checked_effect as r,
  init as a,
} from "@marko/runtime-tags/dom";
const i = o(
    "a0",
    (o) =>
      function (t) {
        c(o, t);
      },
  ),
  c = t(2, (o, t) => {
    m(o, 0, t, i(o)), n(o[1], String(t));
  });
o("a1", (o) => r(o, 0)), a();
