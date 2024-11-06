// size: 286 (min) 180 (brotli)

import {
  register as m,
  state as t,
  tagVarSignal as a,
  registerBoundSignal as e,
  value as o,
  data as r,
  init as n,
} from "@marko/runtime-tags/dom";
const b = t(
  1,
  (m, t) => a(m, t),
  () => a,
);
m("a0", (m) => b(m, m[0].parentElement.tagName)),
  e(
    "b0",
    o(5, (m, t) => r(m[3], t)),
  ),
  e(
    "b1",
    o(4, (m, t) => r(m[1], t)),
  ),
  n();
