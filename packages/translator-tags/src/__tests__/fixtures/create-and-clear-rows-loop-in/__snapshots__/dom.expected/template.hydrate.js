// size: 367 (min) 202 (brotli)

import {
  register as o,
  createRenderer as i,
  value as d,
  data as v,
} from "@marko/runtime-tags/dom";
const m = d(2, (o, i) => v(o[0], i)),
  p = d(1, (o, i) => m(o, i[0]));
o(
  "a0",
  i("<p> </p>", "D ", void 0, void 0, void 0, () => p),
);
const t = d(4, (o, i) => v(o[1], i)),
  a = d(3, (o, i) => v(o[0], i)),
  r = d(2, (o, i) => {
    a(o, i[0]), t(o, i[1]);
  });
o(
  "a1",
  i("<p><!>: <!></p>", "D%c%", void 0, void 0, void 0, () => r),
);
