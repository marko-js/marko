// size: 354 (min) 214 (brotli)

import {
  effect as c,
  attrsEvents as e,
  value as o,
  attrs as t,
  register as n,
  state as m,
  data as r,
  inChild as a,
  init as h,
} from "@marko/runtime-tags/dom";
const i = c("a0", (c) => e(c, 0)),
  k = o(2, (c, e) => {
    t(c, 0, { type: "checkbox", ...e }), i(c);
  }),
  d = n(
    "b0",
    (c) =>
      function (e) {
        g(c, e);
      },
  ),
  g = m(
    2,
    (c, e) => {
      r(c[1], String(e)), k(c[0], { checked: e, checkedChange: d(c) });
    },
    () => a(0, k),
  );
h();
