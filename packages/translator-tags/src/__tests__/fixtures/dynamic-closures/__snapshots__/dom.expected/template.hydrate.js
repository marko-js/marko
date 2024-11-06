// size: 537 (min) 254 (brotli)

import * as r from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
r.dynamicTagAttrs(0);
r.registerSubscriber(
  "b0",
  r.dynamicClosure(
    4,
    (e, t) => r.data(e[2], t),
    (r) => r._._,
  ),
);
const t = r.registerSubscriber(
    "b1",
    r.dynamicClosure(4, (e, t) => r.data(e[2], t)),
  ),
  a = r.dynamicClosure(3, (e, t) => r.data(e[1], t)),
  i = (e) => {
    r.data(e[0], 1);
  };
r.register(
  "b2",
  r.createRendererWithOwner("<!> <!> <!>", "%c%c%", i, () => [t, a]),
);
const c = r.state(4, null, () => r.dynamicSubscribers(4));
r.effect("b3", (e) =>
  r.on(e[0], "click", function () {
    c(e, 4);
  }),
),
  e();
