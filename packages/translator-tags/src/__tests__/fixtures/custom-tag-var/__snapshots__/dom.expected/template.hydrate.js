// size: 314 (min) 196 (brotli)

import {
  effect as o,
  on as t,
  state as n,
  data as r,
  tagVarSignal as c,
  registerBoundSignal as m,
  value as i,
  init as a,
} from "@marko/runtime-tags/dom";
const s = o("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 2: t } = o;
        return function () {
          u(o, t + 1);
        };
      })(o),
    ),
  ),
  u = n(
    2,
    (o, t) => {
      r(o[1], t), s(o), c(o, t);
    },
    () => c,
  );
m(
  "b0",
  i(2, (o, t) => r(o[1], t)),
),
  a();
