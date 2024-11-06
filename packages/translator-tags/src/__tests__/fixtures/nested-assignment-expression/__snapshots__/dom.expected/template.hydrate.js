// size: 289 (min) 178 (brotli)

import {
  effect as o,
  on as t,
  state as n,
  data as c,
  init as r,
} from "@marko/runtime-tags/dom";
const m = n(6, (o, t) => c(o[3], t)),
  i = n(5, (o, t) => c(o[2], t)),
  s = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 4: t } = o;
        return function () {
          const n = i(o, (a(o, t + 1), t));
          m(o, n);
        };
      })(o),
    ),
  ),
  a = n(4, (o, t) => {
    c(o[1], t), s(o);
  });
r();
