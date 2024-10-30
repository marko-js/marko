// size: 255 (min) 182 (brotli)

import {
  dynamicTagAttrs as o,
  registerSubscriber as m,
  dynamicClosure as r,
  data as t,
  register as b,
  createRendererWithOwner as i,
} from "@marko/runtime-tags/dom";
o(0);
const a = m(
  "b0",
  r(3, (o, m) => t(o[0], m)),
);
b(
  "b1",
  i("<h1>Hello <!></h1>", "Db%", void 0, () => [a]),
);
