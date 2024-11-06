// size: 319 (min) 182 (brotli)

import {
  register as c,
  on as o,
  state as n,
  data as t,
  intersection as i,
  init as m,
} from "@marko/runtime-tags/dom";
const r = i(2, (c) => {
    const { 5: o, 6: n } = c;
    t(c[4], o + n);
  }),
  a = n(
    6,
    (c, o) => t(c[3], o),
    () => r,
  ),
  f = n(
    5,
    (c, o) => t(c[1], o),
    () => r,
  );
c("a0", (c) => {
  o(c[0], "click", function () {
    f(c, 10);
  }),
    o(c[2], "click", function () {
      a(c, 5);
    });
}),
  m();
