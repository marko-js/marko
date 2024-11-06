// size: 230 (min) 167 (brotli)

import * as r from "@marko/runtime-tags/dom";
r.dynamicTagAttrs(0);
const e = r.registerSubscriber(
  "b0",
  r.dynamicClosure(3, (e, t) => r.data(e[0], t)),
);
r.register(
  "b1",
  r.createRendererWithOwner("<h1>Hello <!></h1>", "Db%", void 0, () => [e]),
);
