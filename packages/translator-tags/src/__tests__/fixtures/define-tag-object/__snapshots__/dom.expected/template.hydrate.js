// size: 316 (min) 197 (brotli)

import {
  register as o,
  on as r,
  queueSource as t,
  value as n,
  data as i,
  queueEffect as c,
  init as m,
} from "@marko/runtime-tags/dom";
const a = n(4, (o, r) => i(o[0], JSON.stringify(r))),
  f = o("a1", (o) =>
    r(
      o[1],
      "click",
      ((o) => {
        const { 3: r } = o;
        return function () {
          t(o, s, r + 1);
        };
      })(o),
    ),
  ),
  s = n(3, (o, r) => {
    i(o[2], r), c(o, f), a(o, { foo: 1, bar: r + 1 });
  });
m();
