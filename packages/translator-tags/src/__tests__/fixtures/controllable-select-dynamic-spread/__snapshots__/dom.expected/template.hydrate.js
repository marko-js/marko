// size: 347 (min) 208 (brotli)

import {
  register as o,
  attrsEvents as t,
  createRenderer as a,
  dynamicTagAttrs as i,
  attrs as n,
  queueEffect as p,
  init as m,
} from "@marko/runtime-tags/dom";
const e = o("a0", (o) => {
  t(o, 0), t(o, 1), t(o, 2);
});
i(
  0,
  o(
    "a1",
    a(
      "<option>A</option><option>B</option><option>C</option>",
      " b b ",
      (o) => {
        n(o, 0, { value: "a" }),
          n(o, 1, { value: "b" }),
          n(o, 2, { value: "c" }),
          p(o, e);
      },
    ),
  ),
),
  m();
