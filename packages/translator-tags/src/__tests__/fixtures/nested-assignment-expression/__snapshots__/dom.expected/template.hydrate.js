// size: 339 (min) 212 (brotli)

import {
  register as n,
  on as o,
  queueSource as t,
  value as c,
  data as r,
  queueEffect as m,
  init as s,
} from "@marko/runtime-tags/dom";
const i = c(6, (n, o) => r(n[3], o)),
  u = c(5, (n, o) => r(n[2], o)),
  a = n("qW2NqQsn", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const { 4: o } = n;
        return function () {
          const c = t(n, u, (t(n, e, o + 1), o));
          t(n, i, c);
        };
      })(n),
    ),
  ),
  e = c(4, (n, o) => {
    r(n[1], o), m(n, a);
  });
s();
