// size: 308 (min) 199 (brotli)

import {
  register as n,
  on as o,
  queueSource as t,
  value as e,
  attr as i,
  data as r,
  queueEffect as a,
  init as c,
} from "@marko/runtime-tags/dom";
const m = n("Dxgg4VkB", (n) =>
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
  s = e(3, (n, o) => {
    i(n[0], "disabled", o), r(n[2], o ? "enable" : "disable"), a(n, m);
  });
c();
