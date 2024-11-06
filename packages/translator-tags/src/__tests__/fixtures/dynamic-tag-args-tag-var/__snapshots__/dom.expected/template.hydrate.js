// size: 389 (min) 234 (brotli)

import {
  dynamicTagAttrs as o,
  registerBoundSignal as t,
  value as n,
  data as c,
  effect as r,
  on as m,
  state as s,
  intersection as i,
  init as u,
} from "@marko/runtime-tags/dom";
const a = o(2),
  b = i(
    2,
    (o) => {
      const { 4: t } = o;
      a(o, () => t);
    },
    () => a,
  );
t(
  "b0",
  n(5, (o, t) => c(o[3], t)),
);
const e = r("b1", (o) =>
    m(
      o[0],
      "click",
      ((o) => {
        const { 4: t } = o;
        return function () {
          f(o, t + 1);
        };
      })(o),
    ),
  ),
  f = s(
    4,
    (o, t) => {
      c(o[1], t), e(o);
    },
    () => b,
  );
u();
