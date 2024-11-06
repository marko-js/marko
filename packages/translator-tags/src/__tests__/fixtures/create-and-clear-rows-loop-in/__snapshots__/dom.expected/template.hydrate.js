// size: 410 (min) 185 (brotli)

import * as e from "@marko/runtime-tags/dom";
const a = e.value(2, (a, r) => e.data(a[0], r)),
  r = e.value(1, (e, r) => a(e, r[0]));
e.register(
  "a0",
  e.createRenderer("<p> </p>", "D ", void 0, void 0, void 0, () => r),
);
const d = e.value(4, (a, r) => e.data(a[1], r)),
  o = e.value(3, (a, r) => e.data(a[0], r)),
  t = e.value(2, (e, a) => {
    o(e, a[0]), d(e, a[1]);
  });
e.register(
  "a1",
  e.createRenderer("<p><!>: <!></p>", "D%c%", void 0, void 0, void 0, () => t),
);
