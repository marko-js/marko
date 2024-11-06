// size: 252 (min) 171 (brotli)

import * as a from "@marko/runtime-tags/dom";
const e = a.value(4, (e, r) => a.data(e[0], r)),
  r = a.value(3, (e, r) => a.data(e[1], r)),
  d = a.value(2, (a, d) => {
    r(a, d[0]), e(a, d[1]);
  });
a.register(
  "a0",
  a.createRenderer("<div><!>: <!></div>", "D%c%", void 0, void 0, () => d),
);
