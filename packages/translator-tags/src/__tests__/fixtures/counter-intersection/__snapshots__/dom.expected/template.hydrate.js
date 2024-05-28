// size: 339 (min) 191 (brotli)

import {
  register as c,
  on as o,
  queueSource as n,
  value as t,
  data as i,
  intersection as m,
  init as r,
} from "@marko/runtime-tags/dom";
const f = m(2, (c) => {
    const { 5: o, 6: n } = c;
    i(c[4], o + n);
  }),
  k = t(6, (c, o) => i(c[3], o), f),
  s = t(5, (c, o) => i(c[1], o), f);
c("d", (c) => {
  o(
    c[0],
    "click",
    ((c) =>
      function () {
        n(c, s, 10);
      })(c),
  ),
    o(
      c[2],
      "click",
      ((c) =>
        function () {
          n(c, k, 5);
        })(c),
    );
}),
  r();
