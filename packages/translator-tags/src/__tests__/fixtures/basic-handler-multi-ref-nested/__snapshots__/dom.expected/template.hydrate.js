// size: 332 (min) 206 (brotli)

import {
  register as n,
  on as o,
  queueSource as t,
  value as r,
  data as c,
  intersection as m,
  queueEffect as i,
  init as a,
} from "@marko/runtime-tags/dom";
const s = n("a2", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const { 2: o, 3: r } = n;
        return function () {
          t(
            n,
            u,
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
  u = r(
    2,
    (n, o) => c(n[1], o.join("")),
    m(2, (n) => {
      i(n, s);
    }),
  );
a();
