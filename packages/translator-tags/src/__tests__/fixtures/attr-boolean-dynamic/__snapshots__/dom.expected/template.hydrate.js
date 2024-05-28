// size: 301 (min) 184 (brotli)

import {
  register as n,
  on as o,
  queueSource as t,
  value as c,
  attr as e,
  data as i,
  queueEffect as r,
  init as a,
} from "@marko/runtime-tags/dom";
const m = n("c", (n) =>
    o(
      n[1],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          t(n, s, !o);
        };
      })(n),
    ),
  ),
  s = c(3, (n, o) => {
    e(n[0], "disabled", o), i(n[2], o ? "enable" : "disable"), r(n, m);
  });
a();
