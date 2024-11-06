// size: 323 (min) 207 (brotli)

import {
  register as n,
  on as o,
  state as t,
  data as r,
  intersection as c,
  queueEffect as m,
  init as i,
} from "@marko/runtime-tags/dom";
const a = n("a0", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const { 2: o, 3: t } = n;
        return function () {
          u(
            n,
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
  s = c(2, (n) => {
    m(n, a);
  }),
  u = t(
    2,
    (n, o) => r(n[1], o.join("")),
    () => s,
  );
i();
