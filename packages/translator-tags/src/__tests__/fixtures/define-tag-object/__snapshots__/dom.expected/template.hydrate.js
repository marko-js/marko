// size: 308 (min) 199 (brotli)

import {
  register as o,
  on as r,
  state as t,
  data as n,
  queueEffect as i,
  value as c,
  init as m,
} from "@marko/runtime-tags/dom";
const a = c(4, (o, r) => n(o[0], JSON.stringify(r))),
  f = o("a0", (o) =>
    r(
      o[1],
      "click",
      ((o) => {
        const { 3: r } = o;
        return function () {
          s(o, r + 1);
        };
      })(o),
    ),
  ),
  s = t(3, (o, r) => {
    n(o[2], r), i(o, f), a(o, { foo: 1, bar: r + 1 });
  });
m();
