// size: 335 (min) 207 (brotli)

import {
  register as o,
  on as t,
  state as n,
  data as r,
  queueEffect as c,
  tagVarSignal as m,
  registerBoundSignal as i,
  value as a,
  init as s,
} from "@marko/runtime-tags/dom";
const u = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 2: t } = o;
        return function () {
          e(o, t + 1);
        };
      })(o),
    ),
  ),
  e = n(
    2,
    (o, t) => {
      r(o[1], t), c(o, u), m(o, t);
    },
    () => m,
  );
i(
  "b0",
  a(2, (o, t) => r(o[1], t)),
),
  s();
