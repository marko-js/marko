// size: 341 (min) 218 (brotli)

import {
  dynamicTagAttrs as o,
  register as t,
  on as n,
  queueSource as c,
  value as r,
  data as m,
  queueEffect as i,
  intersection as s,
  init as u,
} from "@marko/runtime-tags/dom";
const a = o(2),
  e = s(2, (o) => {
    const { 3: t } = o;
    a(o, () => t);
  }),
  f = t("b0", (o) =>
    n(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          c(o, k, t + 1);
        };
      })(o),
    ),
  ),
  k = r(
    3,
    (o, t) => {
      m(o[1], t), i(o, f);
    },
    e,
  );
u();
