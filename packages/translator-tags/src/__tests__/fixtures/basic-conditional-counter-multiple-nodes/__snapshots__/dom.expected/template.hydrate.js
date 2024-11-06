// size: 528 (min) 265 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const n = t.closure(4, (o, n) => t.data(o[0], n)),
  e = t.register(
    "a0",
    t.createRenderer("The count is <!>", "b%", void 0, () => [n]),
  ),
  r = t.conditional(2),
  c = t.effect("a1", (o) =>
    t.on(
      o[0],
      "click",
      ((t) => {
        const { 4: o } = t;
        return function () {
          i(t, o + 1);
        };
      })(o),
    ),
  ),
  i = t.state(
    4,
    (t, o) => c(t),
    () => t.inConditionalScope(n, 2),
  ),
  a = t.effect("a2", (o) =>
    t.on(
      o[1],
      "click",
      ((t) => {
        const { 3: o } = t;
        return function () {
          s(t, !o);
        };
      })(o),
    ),
  ),
  s = t.state(
    3,
    (t, o) => {
      a(t), r(t, o ? e : null);
    },
    () => r,
  );
o();
