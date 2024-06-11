// size: 340 (min) 193 (brotli)

import {
  register as c,
  on as o,
  queueSource as n,
  value as t,
  data as i,
  intersection as m,
  init as r,
} from "@marko/runtime-tags/dom";
const a = m(2, (c) => {
    const { 5: o, 6: n } = c;
    i(c[4], o + n);
  }),
  f = t(6, (c, o) => i(c[3], o), a),
  k = t(5, (c, o) => i(c[1], o), a);
c("a2", (c) => {
  o(
    c[0],
    "click",
    ((c) =>
      function () {
        n(c, k, 10);
      })(c),
  ),
    o(
      c[2],
      "click",
      ((c) =>
        function () {
          n(c, f, 5);
        })(c),
    );
}),
  r();
