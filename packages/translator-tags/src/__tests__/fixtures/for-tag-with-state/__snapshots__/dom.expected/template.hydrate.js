// size: 259 (min) 167 (brotli)

import * as a from "@marko/runtime-tags/dom";
const e = a.value(4, (e, d) => a.data(e[0], d)),
  d = a.value(3, (e, d) => a.data(e[1], d)),
  r = a.value(2, (a, r) => {
    d(a, r[0]), e(a, r[1]);
  });
a.register(
  "a0",
  a.createRenderer(
    "<div><!>: <!></div>",
    "D%c%",
    void 0,
    void 0,
    void 0,
    () => r,
  ),
);
