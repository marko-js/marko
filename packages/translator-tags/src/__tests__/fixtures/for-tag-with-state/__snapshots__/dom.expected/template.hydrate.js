// size: 257 (min) 186 (brotli)

import {
  register as o,
  createRenderer as i,
  value as d,
  data as m,
} from "@marko/runtime-tags/dom";
const v = d(4, (o, i) => m(o[0], i)),
  r = d(3, (o, i) => m(o[1], i)),
  t = d(2, (o, i) => {
    r(o, i[0]), v(o, i[1]);
  });
o(
  "a0",
  i("<div><!>: <!></div>", "D%c%", void 0, void 0, void 0, () => t),
);
