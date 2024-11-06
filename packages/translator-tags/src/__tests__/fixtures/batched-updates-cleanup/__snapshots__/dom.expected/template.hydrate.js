// size: 436 (min) 251 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const n = t.closure(3, (o, n) => t.data(o[0], n)),
  e = t.register(
    "a0",
    t.createRenderer("<span> </span>", "D ", void 0, () => [n]),
  ),
  a = t.conditional(1),
  r = t.state(3, null, () => t.inConditionalScope(n, 1)),
  i = t.effect("a1", (o) =>
    t.on(
      o[0],
      "click",
      ((t) => {
        const { 2: o } = t;
        return function () {
          r(t, "bye"), s(t, !o);
        };
      })(o),
    ),
  ),
  s = t.state(
    2,
    (t, o) => {
      i(t), a(t, o ? e : null);
    },
    () => a,
  );
o();
