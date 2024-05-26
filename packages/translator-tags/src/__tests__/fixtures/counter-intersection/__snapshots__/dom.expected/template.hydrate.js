// size: 346 (min) 211 (brotli)

import {
  register as c,
  on as i,
  queueSource as o,
  value as n,
  data as t,
  intersection as m,
  init as r,
} from "@marko/runtime-tags/dom";
const a = m(2, (c) => {
    const { 5: i, 6: o } = c;
    t(c[4], i + o);
  }),
  f = n(6, (c, i) => t(c[3], i), a),
  k = n(5, (c, i) => t(c[1], i), a);
c("TiN/KiCa", (c) => {
  i(
    c[0],
    "click",
    ((c) =>
      function () {
        o(c, k, 10);
      })(c),
  ),
    i(
      c[2],
      "click",
      ((c) =>
        function () {
          o(c, f, 5);
        })(c),
    );
}),
  r();
