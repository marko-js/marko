// size: 332 (min) 212 (brotli)

import {
  dynamicTagAttrs as o,
  effect as t,
  on as n,
  state as c,
  data as r,
  intersection as i,
  init as m,
} from "@marko/runtime-tags/dom";
const s = o(2, void 0, 1),
  f = i(
    2,
    (o) => {
      const { 3: t } = o;
      s(o, () => [t, "foo"]);
    },
    () => s,
  ),
  u = t("b0", (o) =>
    n(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          a(o, t + 1);
        };
      })(o),
    ),
  ),
  a = c(
    3,
    (o, t) => {
      r(o[1], t), u(o);
    },
    () => f,
  );
m();
