// size: 506 (min) 265 (brotli)

import {
  register as a,
  on as r,
  queueSource as i,
  value as o,
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
a("a1", (a) =>
  r(a[0], "click", function () {
    let r, o, t, c, n, _;
    ({
      a: o,
      _b: { _b: t },
      local: r,
      ...c
    } = { a: 1, _b: { _b: 2 }, local: 3, c: 4 }),
      i(a, s, o),
      i(a, b, t),
      i(a, m, c),
      ([
        {
          arr: [r, n, , ..._],
        },
      ] = [{ arr: [6, 7, 8, 9] }]),
      i(a, f, n),
      i(a, l, _);
  }),
),
  c();
