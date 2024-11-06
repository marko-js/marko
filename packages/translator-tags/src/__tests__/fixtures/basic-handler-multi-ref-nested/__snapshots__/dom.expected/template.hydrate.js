// size: 302 (min) 192 (brotli)

import {
  effect as n,
  on as o,
  state as t,
  data as r,
  intersection as c,
  init as m,
} from "@marko/runtime-tags/dom";
const i = n("a0", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const { 2: o, 3: t } = n;
        return function () {
          s(
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
  a = c(2, (n) => {
    i(n);
  }),
  s = t(
    2,
    (n, o) => r(n[1], o.join("")),
    () => a,
  );
m();
