// size: 194 (min) 131 (brotli)

import * as e from "@marko/runtime-tags/dom";
const a = e.value(2, (a, r) => e.data(a[0], r.text)),
  r = e.value(1, (e, r) => a(e, r[0]));
e.register(
  "a0",
  e.createRenderer(" ", " ", void 0, void 0, void 0, () => r),
);
