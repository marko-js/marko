// size: 450 (min) 267 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as n } from "@marko/runtime-tags/dom";
const o = t.register("a0", t.createRendererWithOwner("body content", "")),
  r = t.dynamicTagAttrs(0, o),
  e = t.intersection(
    2,
    (t) => {
      const { 3: n } = t;
      r(t, () => ({ class: n }));
    },
    () => r,
  ),
  a = t.conditional(0, 0, () => e),
  i = t.effect("a1", (n) =>
    t.on(
      n[1],
      "click",
      ((t) => {
        const { 2: n } = t;
        return function () {
          s(t, "span" === n ? "div" : "span");
        };
      })(n),
    ),
  ),
  s = t.state(
    2,
    (t, n) => {
      i(t), a(t, n || o(t));
    },
    () => a,
  );
n();
