// size: 479 (min) 257 (brotli)

import {
  register as a,
  on as r,
  state as i,
  data as o,
  init as t,
} from "@marko/runtime-tags/dom";
function c(a) {}
a("a0", c);
const n = i(10, (a, r) => o(a[5], JSON.stringify(r))),
  l = i(9, (a, r) => o(a[4], r)),
  f = i(8, (a, r) => o(a[3], JSON.stringify(r))),
  m = i(7, (a, r) => o(a[2], r)),
  b = i(6, (a, r) => o(a[1], r));
a("a1", (a) =>
  r(a[0], "click", function () {
    let r, i, o, t, c, s;
    ({
      a: i,
      _b: { _b: o },
      local: r,
      ...t
    } = { a: 1, _b: { _b: 2 }, local: 3, c: 4 }),
      b(a, i),
      m(a, o),
      f(a, t),
      ([
        {
          arr: [r, c, , ...s],
        },
      ] = [{ arr: [6, 7, 8, 9] }]),
      l(a, c),
      n(a, s);
  }),
),
  t();
