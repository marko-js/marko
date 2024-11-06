// size: 519 (min) 281 (brotli)

import * as r from "@marko/runtime-tags/dom";
import { init as t } from "@marko/runtime-tags/dom";
r.dynamicTagAttrs(1);
const e = r.effect("a0", (t) => {
    const { 4: e } = t;
    r.on(t[0], "click", e);
  }),
  i = r.value(4, (r, t) => e(r)),
  n = r.register("b0", (r) => {
    const { 1: t } = r;
    return function () {
      o(r, t + 1);
    };
  }),
  s = r.registerSubscriber(
    "b1",
    r.dynamicClosure(1, (t, e) => r.data(t[0], e)),
  );
r.register(
  "b2",
  r.createRendererWithOwner(" ", " ", void 0, () => [s]),
);
const o = r.state(
  1,
  (r, t) => i(r[0], n(r)),
  () => r.intersections([r.inChild(0, i), r.dynamicSubscribers(1)]),
);
t();
