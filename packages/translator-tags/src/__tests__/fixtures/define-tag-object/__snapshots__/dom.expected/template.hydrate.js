// size: 287 (min) 185 (brotli)

import {
  effect as o,
  on as r,
  state as t,
  data as n,
  value as i,
  init as c,
} from "@marko/runtime-tags/dom";
const m = i(4, (o, r) => n(o[0], JSON.stringify(r))),
  a = o("a0", (o) =>
    r(
      o[1],
      "click",
      ((o) => {
        const { 3: r } = o;
        return function () {
          f(o, r + 1);
        };
      })(o),
    ),
  ),
  f = t(3, (o, r) => {
    n(o[2], r), a(o), m(o, { foo: 1, bar: r + 1 });
  });
c();
