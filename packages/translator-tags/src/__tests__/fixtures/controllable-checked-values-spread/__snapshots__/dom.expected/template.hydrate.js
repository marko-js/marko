// size: 623 (min) 255 (brotli)

import * as e from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const t = e.effect("a0", (a) => e.attrsEvents(a, 0)),
  c = e.value(2, (a, c) => {
    e.attrs(a, 0, { type: "checkbox", ...c }), t(a);
  }),
  i = e.register(
    "b0",
    (e) =>
      function (a) {
        u(e, a);
      },
  ),
  n = e.register(
    "b1",
    (e) =>
      function (a) {
        u(e, a);
      },
  ),
  r = e.register(
    "b1",
    (e) =>
      function (a) {
        u(e, a);
      },
  ),
  u = e.state(
    4,
    (a, t) => {
      e.data(a[3], t),
        c(a[0], { checkedValue: t, checkedValueChange: i(a), value: "a" }),
        c(a[1], { checkedValue: t, checkedValueChange: n(a), value: "b" }),
        c(a[2], { checkedValue: t, checkedValueChange: r(a), value: "c" });
    },
    () => e.intersections([e.inChild(0, c), e.inChild(1, c), e.inChild(2, c)]),
  );
a();
