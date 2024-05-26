// size: 322 (min) 208 (brotli)

import {
  register as o,
  on as r,
  queueSource as t,
  value as i,
  data as n,
  queueEffect as c,
  init as m,
} from "@marko/runtime-tags/dom";
const f = i(4, (o, r) => n(o[0], JSON.stringify(r))),
  s = o("JjSoNSTi", (o) =>
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
  a = i(3, (o, r) => {
    n(o[2], r), c(o, s), f(o, { foo: 1, bar: r + 1 });
  });
m();
