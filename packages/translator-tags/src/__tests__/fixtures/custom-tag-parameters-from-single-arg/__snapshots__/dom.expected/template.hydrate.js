// size: 499 (min) 288 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const o = t.dynamicTagAttrs(2),
  r = t.intersection(
    2,
    (t) => {
      const { 5: e } = t;
      o(t, () => e);
    },
    () => o,
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
    (e, o) => {
      t.data(e[1], o), a(e);
    },
    () => r,
  ),
  n = t.value(2, (e, o) => t.data(e[0], o)),
  d = t.value(1, (t, e) => n(t, e[0]));
t.register(
  "b0",
  t.createRendererWithOwner(
    "<div>Count: <!></div>",
    "Db%",
    void 0,
    void 0,
    void 0,
    () => d,
  ),
),
  e();
