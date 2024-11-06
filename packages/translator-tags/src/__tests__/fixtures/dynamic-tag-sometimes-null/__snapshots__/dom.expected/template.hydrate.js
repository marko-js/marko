// size: 387 (min) 241 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as r } from "@marko/runtime-tags/dom";
const n = t.register("a0", t.createRendererWithOwner("Body Content", "")),
  o = t.dynamicTagAttrs(0, n),
  e = t.conditional(
    0,
    (t) => o(t, () => ({})),
    () => o,
  ),
  a = t.effect("a1", (r) =>
    t.on(
      r[1],
      "click",
      ((t) => {
        const { 2: r } = t;
        return function () {
          i(t, r ? null : "div");
        };
      })(r),
    ),
  ),
  i = t.state(
    2,
    (t, r) => {
      a(t), e(t, r || n(t));
    },
    () => e,
  );
r();
