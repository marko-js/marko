// size: 410 (min) 239 (brotli)

import {
  dynamicTagAttrs as o,
  registerBoundSignal as t,
  value as n,
  data as c,
  register as r,
  on as m,
  state as s,
  queueEffect as i,
  intersection as u,
  init as a,
} from "@marko/runtime-tags/dom";
const b = o(2),
  e = u(
    2,
    (o) => {
      const { 4: t } = o;
      b(o, () => t);
    },
    () => b,
  );
t(
  "b0",
  n(5, (o, t) => c(o[3], t)),
);
const f = r("b1", (o) =>
    m(
      o[0],
      "click",
      ((o) => {
        const { 4: t } = o;
        return function () {
          k(o, t + 1);
        };
      })(o),
    ),
  ),
  k = s(
    4,
    (o, t) => {
      c(o[1], t), i(o, f);
    },
    () => e,
  );
a();
