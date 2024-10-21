// size: 229 (min) 177 (brotli)

import {
  registerSubscriber as o,
  dynamicClosure as m,
  data as r,
  register as t,
  createRendererWithOwner as b,
} from "@marko/runtime-tags/dom";
const i = o(
  "b0",
  m(3, (o, m) => r(o[0], m)),
);
t(
  "b1",
  b("<h1>Hello <!></h1>", "Db%", void 0, () => [i]),
);
