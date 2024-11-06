// size: 262 (min) 171 (brotli)

import {
  effect as n,
  on as o,
  state as t,
  attr as a,
  data as e,
  init as i,
} from "@marko/runtime-tags/dom";
const r = n("a0", (n) =>
    o(
      n[1],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          c(n, !o);
        };
      })(n),
    ),
  ),
  c = t(3, (n, o) => {
    a(n[0], "disabled", o), e(n[2], o ? "enable" : "disable"), r(n);
  });
i();
