// size: 347 (min) 194 (brotli)

import {
  register as o,
  createRenderer as i,
  value as d,
  data as v,
} from "@marko/runtime-tags/dom";
const m = d(2, (o, i) => v(o[0], i));
o(
  "a0",
  i(
    "<p> </p>",
    "D ",
    void 0,
    void 0,
    void 0,
    d(1, (o, i) => m(o, i[0])),
  ),
);
const p = d(4, (o, i) => v(o[1], i)),
  t = d(3, (o, i) => v(o[0], i));
o(
  "a1",
  i(
    "<p><!>: <!></p>",
    "D%c%",
    void 0,
    void 0,
    void 0,
    d(2, (o, i) => {
      t(o, i[0]), p(o, i[1]);
    }),
  ),
);
