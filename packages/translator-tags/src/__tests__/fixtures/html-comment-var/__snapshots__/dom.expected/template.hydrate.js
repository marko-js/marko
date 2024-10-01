// size: 294 (min) 176 (brotli)

import {
  register as m,
  queueSource as t,
  value as a,
  tagVarSignal as e,
  registerBoundSignal as o,
  data as r,
  init as n,
} from "@marko/runtime-tags/dom";
const b = a(
  1,
  (m, t) => e(m, t),
  () => e,
);
m("a0", (m) => t(m, b, m[0].parentElement.tagName)),
  o(
    "b0",
    a(5, (m, t) => r(m[3], t)),
  ),
  o(
    "b1",
    a(4, (m, t) => r(m[1], t)),
  ),
  n();
