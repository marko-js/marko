// size: 487 (min) 262 (brotli)

import {
  register as r,
  on as a,
  queueSource as i,
  value as o,
  data as t,
  init as c,
} from "@marko/runtime-tags/dom";
const l = o(10, (r, a) => t(r[5], JSON.stringify(a))),
  n = o(9, (r, a) => t(r[4], a)),
  m = o(8, (r, a) => t(r[3], JSON.stringify(a))),
  b = o(7, (r, a) => t(r[2], a)),
  f = o(6, (r, a) => t(r[1], a));
r("a2", (r) =>
  a(
    r[0],
    "click",
    ((r) =>
      function () {
        let a, o, t, c, s, _;
        ({
          a: o,
          _b: { _b: t },
          local: a,
          ...c
        } = { a: 1, _b: { _b: 2 }, local: 3, c: 4 }),
          i(r, f, o),
          i(r, b, t),
          i(r, m, c),
          ([
            {
              arr: [a, s, , ..._],
            },
          ] = [{ arr: [6, 7, 8, 9] }]),
          i(r, n, s),
          i(r, l, _);
      })(r),
  ),
),
  c();
