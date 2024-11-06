// size: 552 (min) 286 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
function r(t) {}
t.register("a0", r);
const o = t.state(10, (a, r) => t.data(a[5], JSON.stringify(r))),
  e = t.state(9, (a, r) => t.data(a[4], r)),
  i = t.state(8, (a, r) => t.data(a[3], JSON.stringify(r))),
  s = t.state(7, (a, r) => t.data(a[2], r)),
  m = t.state(6, (a, r) => t.data(a[1], r));
t.effect("a1", (a) =>
  t.on(a[0], "click", function () {
    let t, r, n, c, f, d;
    ({
      a: r,
      _b: { _b: n },
      local: t,
      ...c
    } = { a: 1, _b: { _b: 2 }, local: 3, c: 4 }),
      m(a, r),
      s(a, n),
      i(a, c),
      ([
        {
          arr: [t, f, , ...d],
        },
      ] = [{ arr: [6, 7, 8, 9] }]),
      e(a, f),
      o(a, d);
  }),
),
  a();
