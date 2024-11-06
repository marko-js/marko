// size: 349 (min) 204 (brotli)

import {
  effect as o,
  attrsEvents as t,
  register as a,
  createRendererWithOwner as i,
  dynamicTagAttrs as n,
  attrs as p,
  init as m,
} from "@marko/runtime-tags/dom";
const e = o("a0", (o) => {
  t(o, 0), t(o, 1), t(o, 2);
});
n(
  0,
  a(
    "a1",
    i(
      "<option>A</option><option>B</option><option>C</option>",
      " b b ",
      (o) => {
        p(o, 0, { value: "a" }),
          p(o, 1, { value: "b" }),
          p(o, 2, { value: "c" }),
          e(o);
      },
    ),
  ),
),
  m();
