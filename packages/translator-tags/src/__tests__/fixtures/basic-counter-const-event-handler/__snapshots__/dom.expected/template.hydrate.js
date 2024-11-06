// size: 288 (min) 183 (brotli)

import {
  register as o,
  effect as t,
  on as n,
  state as c,
  data as r,
  value as m,
  init as a,
} from "@marko/runtime-tags/dom";
const i = o("a0", (o) => {
    const { 2: t } = o;
    return function () {
      e(o, t + 1);
    };
  }),
  s = t("a1", (o) => {
    const { 3: t } = o;
    n(o[0], "click", t);
  }),
  u = m(3, (o, t) => s(o)),
  e = c(2, (o, t) => {
    r(o[1], t), u(o, i(o));
  });
a();
