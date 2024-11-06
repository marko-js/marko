// size: 340 (min) 182 (brotli)

import * as a from "@marko/runtime-tags/dom";
import { init as t } from "@marko/runtime-tags/dom";
const e = a.state(
  1,
  (t, e) => a.tagVarSignal(t, e),
  () => a.tagVarSignal,
);
a.effect("a0", (a) => e(a, a[0].parentElement.tagName)),
  a.registerBoundSignal(
    "b0",
    a.value(5, (t, e) => a.data(t[3], e)),
  ),
  a.registerBoundSignal(
    "b1",
    a.value(4, (t, e) => a.data(t[1], e)),
  ),
  t();
