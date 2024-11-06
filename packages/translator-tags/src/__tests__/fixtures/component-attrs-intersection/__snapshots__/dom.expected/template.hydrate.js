// size: 329 (min) 200 (brotli)

import {
  value as n,
  intersection as o,
  data as t,
  effect as c,
  on as r,
  state as m,
  inChild as i,
  init as s,
} from "@marko/runtime-tags/dom";
const u = o(2, (n) => {
    const { 3: o, 4: c } = n;
    t(n[0], o);
  }),
  l = n(3, null, () => u),
  a = c("b0", (n) =>
    r(
      n[1],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          e(n, o + 1);
        };
      })(n),
    ),
  ),
  e = m(
    2,
    (n, o) => {
      a(n), l(n[0], o);
    },
    () => i(0, l),
  );
s();
