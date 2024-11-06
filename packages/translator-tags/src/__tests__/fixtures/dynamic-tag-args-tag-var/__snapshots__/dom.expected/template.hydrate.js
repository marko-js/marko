// size: 396 (min) 219 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const n = t.dynamicTagAttrs(2),
  a = t.intersection(
    2,
    (t) => {
      const { 4: o } = t;
      n(t, () => o);
    },
    () => n,
  );
t.registerBoundSignal(
  "b0",
  t.value(5, (o, n) => t.data(o[3], n)),
);
const r = t.effect("b1", (o) =>
    t.on(
      o[0],
      "click",
      ((t) => {
        const { 4: o } = t;
        return function () {
          e(t, o + 1);
        };
      })(o),
    ),
  ),
  e = t.state(
    4,
    (o, n) => {
      t.data(o[1], n), r(o);
    },
    () => a,
  );
o();
