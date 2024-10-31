// size: 342 (min) 216 (brotli)

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
const s = n("a0", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const { 2: o, 3: r } = n;
        return function () {
          t(
            n,
            e,
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
  u = m(2, (n) => {
    i(n, s);
  }),
  e = r(
    2,
    (n, o) => c(n[1], o.join("")),
    () => u,
  );
a();
