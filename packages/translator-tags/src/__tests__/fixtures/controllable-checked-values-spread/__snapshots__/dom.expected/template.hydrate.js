// size: 617 (min) 265 (brotli)

import {
  register as e,
  attrsEvents as c,
  value as a,
  attrs as u,
  queueEffect as n,
  queueSource as h,
  data as l,
  intersections as o,
  inChild as k,
  init as s,
} from "@marko/runtime-tags/dom";
const t = e("a0", (e) => c(e, 0)),
  d = a(2, (e, c) => {
    u(e, 0, { type: "checkbox", ...c }), n(e, t);
  }),
  V = e(
    "b0",
    (e) =>
      function (c) {
        h(e, m, c);
      },
  ),
  b = e(
    "b1",
    (e) =>
      function (c) {
        h(e, m, c);
      },
  ),
  i = e(
    "b1",
    (e) =>
      function (c) {
        h(e, m, c);
      },
  ),
  m = a(
    4,
    (e, c) => {
      l(e[3], c),
        d(e[0], { checkedValues: c, checkedValuesChange: V(e), value: "a" }),
        d(e[1], { checkedValues: c, checkedValuesChange: b(e), value: "b" }),
        d(e[2], { checkedValues: c, checkedValuesChange: i(e), value: "c" });
    },
    () => o([k(0, d), k(1, d), k(2, d)]),
  );
s();
