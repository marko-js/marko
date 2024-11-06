// size: 491 (min) 266 (brotli)

import {
  register as a,
  effect as r,
  on as i,
  state as o,
  data as t,
  init as c,
} from "@marko/runtime-tags/dom";
function n(a) {}
a("a0", n);
const l = o(10, (a, r) => t(a[5], JSON.stringify(r))),
  f = o(9, (a, r) => t(a[4], r)),
  m = o(8, (a, r) => t(a[3], JSON.stringify(r))),
  b = o(7, (a, r) => t(a[2], r)),
  s = o(6, (a, r) => t(a[1], r));
r("a1", (a) =>
  i(a[0], "click", function () {
    let r, i, o, t, c, n;
    ({
      a: i,
      _b: { _b: o },
      local: r,
      ...t
    } = { a: 1, _b: { _b: 2 }, local: 3, c: 4 }),
      s(a, i),
      b(a, o),
      m(a, t),
      ([
        {
          arr: [r, c, , ...n],
        },
      ] = [{ arr: [6, 7, 8, 9] }]),
      f(a, c),
      l(a, n);
  }),
),
  c();
