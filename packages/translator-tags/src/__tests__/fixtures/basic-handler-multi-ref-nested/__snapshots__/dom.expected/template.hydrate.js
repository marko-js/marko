// size: 338 (min) 205 (brotli)

import {
  register as n,
  on as o,
  queueSource as t,
  value as r,
  data as m,
  intersection as c,
  queueEffect as i,
  init as s,
} from "@marko/runtime-tags/dom";
const u = n("T3T47mzW", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const { 2: o, 3: r } = n;
        return function () {
          t(
            n,
            a,
            o.map(
              ((n) => {
                const { 3: o } = n;
                return (n) => o;
              })(n),
            ),
          );
        };
      })(n),
    ),
  ),
  a = r(
    2,
    (n, o) => m(n[1], o.join("")),
    c(2, (n) => {
      i(n, u);
    }),
  );
s();
