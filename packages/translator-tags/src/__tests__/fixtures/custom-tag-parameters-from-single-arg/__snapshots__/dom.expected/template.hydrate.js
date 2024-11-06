// size: 492 (min) 285 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const r = t.dynamicTagAttrs(2),
  o = t.intersection(
    2,
    (t) => {
      const { 5: e } = t;
      r(t, () => e);
    },
    () => r,
  ),
  a = t.effect("a0", (e) =>
    t.on(
      e[0],
      "click",
      ((t) => {
        const { 5: e } = t;
        return function () {
          i(t, e + 1);
        };
      })(e),
    ),
  ),
  i = t.state(
    5,
    (e, r) => {
      t.data(e[1], r), a(e);
    },
    () => o,
  ),
  n = t.value(2, (e, r) => t.data(e[0], r)),
  m = t.value(1, (t, e) => n(t, e[0]));
t.register(
  "b0",
  t.createRendererWithOwner(
    "<div>Count: <!></div>",
    "Db%",
    void 0,
    void 0,
    () => m,
  ),
),
  e();
