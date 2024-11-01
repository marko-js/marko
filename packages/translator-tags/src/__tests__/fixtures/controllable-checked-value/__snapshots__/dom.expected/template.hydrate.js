// size: 419 (min) 191 (brotli)

import {
  register as n,
  queueSource as o,
  value as a,
  controllable_input_checkedValue as t,
  data as c,
  controllable_input_checkedValue_effect as i,
  init as m,
} from "@marko/runtime-tags/dom";
const f = n(
    "a0",
    (n) =>
      function (a) {
        o(n, s, a);
      },
  ),
  r = n(
    "a1",
    (n) =>
      function (a) {
        o(n, s, a);
      },
  ),
  u = n(
    "a1",
    (n) =>
      function (a) {
        o(n, s, a);
      },
  ),
  s = a(4, (n, o) => {
    t(n, 0, o, f(n), "a"),
      t(n, 1, o, r(n), "b"),
      t(n, 2, o, u(n), "c"),
      c(n[3], o);
  });
n("a2", (n) => {
  i(n, 0), i(n, 1), i(n, 2);
}),
  m();
