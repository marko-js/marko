// size: 388 (min) 219 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const e = t.closure(2, (o, e) => t.data(o[0], e.text)),
  a = t.register(
    "a0",
    t.createRenderer(" ", " ", void 0, () => [e]),
  ),
  n = t.conditional(1, 0),
  r = t.state(
    3,
    (t, o) => n(t, o ? a : null),
    () => n,
  ),
  i = t.state(2, 0, () => t.inConditionalScope(e, 1));
t.effect("a1", (o) =>
  t.on(o[0], "click", function () {
    i(o, null), r(o, !1);
  }),
),
  o();
