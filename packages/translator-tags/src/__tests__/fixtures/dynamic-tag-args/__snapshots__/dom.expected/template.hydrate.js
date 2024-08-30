// size: 359 (min) 231 (brotli)

import {
  dynamicTagAttrs as o,
  register as t,
  on as n,
  queueSource as c,
  value as r,
  data as i,
  queueEffect as m,
  intersection as s,
  init as f,
} from "@marko/runtime-tags/dom";
const u = o(2, void 0, !0),
  a = s(2, (o) => {
    const { 3: t } = o;
    u(o, () => [t, "foo"]);
  }),
  d = t("b0", (o) =>
    n(
      o[0],
      "click",
      ((o) => {
        const { 3: t } = o;
        return function () {
          c(o, e, t + 1);
        };
      })(o),
    ),
  ),
  e = r(
    3,
    (o, t) => {
      i(o[1], t), m(o, d);
    },
    a,
  );
f();
