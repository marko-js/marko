// size: 599 (min) 262 (brotli)

import {
  register as e,
  attrsEvents as c,
  value as a,
  attrs as u,
  queueEffect as n,
  state as h,
  data as l,
  intersections as o,
  inChild as k,
  init as t,
} from "@marko/runtime-tags/dom";
const d = e("a0", (e) => c(e, 0)),
  V = a(2, (e, c) => {
    u(e, 0, { type: "checkbox", ...c }), n(e, d);
  }),
  b = e(
    "b0",
    (e) =>
      function (c) {
        f(e, c);
      },
  ),
  i = e(
    "b1",
    (e) =>
      function (c) {
        f(e, c);
      },
  ),
  m = e(
    "b1",
    (e) =>
      function (c) {
        f(e, c);
      },
  ),
  f = h(
    4,
    (e, c) => {
      l(e[3], c),
        V(e[0], { checkedValue: c, checkedValueChange: b(e), value: "a" }),
        V(e[1], { checkedValue: c, checkedValueChange: i(e), value: "b" }),
        V(e[2], { checkedValue: c, checkedValueChange: m(e), value: "c" });
    },
    () => o([k(0, V), k(1, V), k(2, V)]),
  );
t();
