// size: 339 (min) 195 (brotli)

import * as a from "@marko/runtime-tags/dom";
import { init as t } from "@marko/runtime-tags/dom";
const r = a.effect("a0", (t) =>
    a.on(
      t[0],
      "click",
      ((a) => {
        const { 2: t } = a;
        return function () {
          o(a, t + 1);
        };
      })(t),
    ),
  ),
  o = a.state(
    2,
    (t, o) => {
      a.data(t[1], o), r(t), a.tagVarSignal(t, o);
    },
    () => a.tagVarSignal,
  );
a.registerBoundSignal(
  "b0",
  a.value(2, (t, r) => a.data(t[1], r)),
),
  t();
