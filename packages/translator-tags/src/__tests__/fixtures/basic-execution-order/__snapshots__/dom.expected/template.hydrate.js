// size: 389 (min) 222 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const e = t.closure(2, (o, e) => t.data(o[0], e.text)),
  n = t.register(
    "a0",
    t.createRenderer(" ", " ", void 0, () => [e]),
  ),
  a = t.conditional(1),
  r = t.state(
    3,
    (t, o) => a(t, o ? n : null),
    () => a,
  ),
  i = t.state(2, null, () => t.inConditionalScope(e, 1));
t.effect("a1", (o) =>
  t.on(o[0], "click", function () {
    i(o, null), r(o, !1);
  }),
),
  o();
