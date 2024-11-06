// size: 435 (min) 253 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const e = t.closure(3, (o, e) => t.data(o[0], e)),
  n = t.register(
    "a0",
    t.createRenderer("<span> </span>", "D ", void 0, () => [e]),
  ),
  a = t.conditional(1, 0),
  r = t.state(3, 0, () => t.inConditionalScope(e, 1)),
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
      i(t), a(t, o ? n : null);
    },
    () => a,
  );
o();
