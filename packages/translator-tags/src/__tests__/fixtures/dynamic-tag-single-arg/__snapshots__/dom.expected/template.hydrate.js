// size: 315 (min) 195 (brotli)

import {
  dynamicTagAttrs as o,
  effect as t,
  on as n,
  state as c,
  data as r,
  intersection as m,
  init as i,
} from "@marko/runtime-tags/dom";
const s = o(2),
  u = m(
    2,
    (o) => {
      const { 3: t } = o;
      s(o, () => t);
    },
    () => s,
  ),
  a = t("b0", (o) =>
    n(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          e(o, t + 1);
        };
      })(o),
    ),
  ),
  e = c(
    3,
    (o, t) => {
      r(o[1], t), a(o);
    },
    () => u,
  );
i();
