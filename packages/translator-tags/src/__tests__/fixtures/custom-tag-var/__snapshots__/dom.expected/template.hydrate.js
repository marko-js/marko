// size: 343 (min) 204 (brotli)

import {
  register as o,
  on as t,
  queueSource as n,
  value as r,
  data as c,
  queueEffect as m,
  tagVarSignal as i,
  registerBoundSignal as a,
  init as s,
} from "@marko/runtime-tags/dom";
const u = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 2: t } = o;
        return function () {
          n(o, e, t + 1);
        };
      })(o),
    ),
  ),
  e = r(
    2,
    (o, t) => {
      c(o[1], t), m(o, u), i(o, t);
    },
    () => i,
  );
a(
  "b0",
  r(2, (o, t) => c(o[1], t)),
),
  s();
