// size: 408 (min) 206 (brotli)

import {
  register as n,
  state as o,
  controllable_input_checkedValue as a,
  data as t,
  effect as c,
  controllable_input_checkedValue_effect as i,
  init as m,
} from "@marko/runtime-tags/dom";
const f = n(
    "a0",
    (n) =>
      function (o) {
        s(n, o);
      },
  ),
  r = n(
    "a1",
    (n) =>
      function (o) {
        s(n, o);
      },
  ),
  u = n(
    "a1",
    (n) =>
      function (o) {
        s(n, o);
      },
  ),
  s = o(4, (n, o) => {
    a(n, 0, o, f(n), "a"),
      a(n, 1, o, r(n), "b"),
      a(n, 2, o, u(n), "c"),
      t(n[3], o);
  });
c("a2", (n) => {
  i(n, 0), i(n, 1), i(n, 2);
}),
  m();
