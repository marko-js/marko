// size: 302 (min) 185 (brotli)

import {
  register as n,
  on as o,
  queueSource as t,
  value as a,
  attr as e,
  data as i,
  queueEffect as r,
  init as c,
} from "@marko/runtime-tags/dom";
const m = n("a1", (n) =>
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
  s = a(3, (n, o) => {
    e(n[0], "disabled", o), i(n[2], o ? "enable" : "disable"), r(n, m);
  });
c();
