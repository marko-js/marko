// size: 369 (min) 217 (brotli)

import {
  register as c,
  attrsEvents as e,
  value as o,
  attrs as t,
  queueEffect as n,
  queueSource as m,
  data as r,
  inChild as a,
  init as h,
} from "@marko/runtime-tags/dom";
const i = c("a0", (c) => e(c, 0)),
  k = o(2, (c, e) => {
    t(c, 0, { type: "checkbox", ...e }), n(c, i);
  }),
  d = c(
    "b0",
    (c) =>
      function (e) {
        m(c, g, e);
      },
  ),
  g = o(
    2,
    (c, e) => {
      r(c[1], String(e)), k(c[0], { checked: e, checkedChange: d(c) });
    },
    () => a(0, k),
  );
h();
