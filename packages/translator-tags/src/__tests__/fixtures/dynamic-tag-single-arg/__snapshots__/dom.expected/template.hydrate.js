// size: 336 (min) 212 (brotli)

import {
  dynamicTagAttrs as o,
  register as t,
  on as n,
  state as c,
  data as r,
  queueEffect as m,
  intersection as i,
  init as s,
} from "@marko/runtime-tags/dom";
const u = o(2),
  a = i(
    2,
    (o) => {
      const { 3: t } = o;
      u(o, () => t);
    },
    () => u,
  ),
  e = t("b0", (o) =>
    n(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          f(o, t + 1);
        };
      })(o),
    ),
  ),
  f = c(
    3,
    (o, t) => {
      r(o[1], t), m(o, e);
    },
    () => a,
  );
s();
