// size: 283 (min) 187 (brotli)

import {
  register as n,
  on as o,
  state as t,
  attr as a,
  data as e,
  queueEffect as i,
  init as r,
} from "@marko/runtime-tags/dom";
const c = n("a0", (n) =>
    o(
      n[1],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          m(n, !o);
        };
      })(n),
    ),
  ),
  m = t(3, (n, o) => {
    a(n[0], "disabled", o), e(n[2], o ? "enable" : "disable"), i(n, c);
  });
r();
