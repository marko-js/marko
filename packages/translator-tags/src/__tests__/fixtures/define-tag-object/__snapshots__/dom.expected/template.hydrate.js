// size: 315 (min) 197 (brotli)

import {
  register as o,
  on as r,
  queueSource as t,
  value as n,
  data as c,
  queueEffect as i,
  init as m,
} from "@marko/runtime-tags/dom";
const f = n(4, (o, r) => c(o[0], JSON.stringify(r))),
  s = o("c", (o) =>
    r(
      o[1],
      "click",
      ((o) => {
        const { 3: r } = o;
        return function () {
          t(o, a, r + 1);
        };
      })(o),
    ),
  ),
  a = n(3, (o, r) => {
    c(o[2], r), i(o, s), f(o, { foo: 1, bar: r + 1 });
  });
m();
