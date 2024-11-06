// size: 396 (min) 181 (brotli)

import {
  register as n,
  state as o,
  controllable_input_checkedValue as a,
  data as t,
  controllable_input_checkedValue_effect as c,
  init as i,
} from "@marko/runtime-tags/dom";
const m = n(
    "a0",
    (n) =>
      function (o) {
        u(n, o);
      },
  ),
  f = n(
    "a1",
    (n) =>
      function (o) {
        u(n, o);
      },
  ),
  r = n(
    "a1",
    (n) =>
      function (o) {
        u(n, o);
      },
  ),
  u = o(4, (n, o) => {
    a(n, 0, o, m(n), "a"),
      a(n, 1, o, f(n), "b"),
      a(n, 2, o, r(n), "c"),
      t(n[3], o);
  });
n("a2", (n) => {
  c(n, 0), c(n, 1), c(n, 2);
}),
  i();
