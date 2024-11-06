// size: 353 (min) 222 (brotli)

import {
  dynamicTagAttrs as o,
  register as t,
  on as n,
  state as c,
  data as r,
  queueEffect as i,
  intersection as m,
  init as s,
} from "@marko/runtime-tags/dom";
const f = o(2, void 0, 1),
  u = m(
    2,
    (o) => {
      const { 3: t } = o;
      f(o, () => [t, "foo"]);
    },
    () => f,
  ),
  a = t("b0", (o) =>
    n(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          d(o, t + 1);
        };
      })(o),
    ),
  ),
  d = c(
    3,
    (o, t) => {
      r(o[1], t), i(o, a);
    },
    () => u,
  );
s();
