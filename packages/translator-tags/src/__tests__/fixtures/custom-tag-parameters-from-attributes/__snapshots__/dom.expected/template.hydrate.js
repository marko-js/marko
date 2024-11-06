// size: 594 (min) 333 (brotli)

import {
  dynamicTagAttrs as o,
  effect as n,
  on as t,
  state as c,
  data as i,
  intersection as m,
  register as a,
  createRendererWithOwner as d,
  value as r,
  init as u,
} from "@marko/runtime-tags/dom";
const e = o(2),
  v = m(
    3,
    (o) => {
      const { 4: n, 5: t } = o;
      e(o, () => ({ count: t, name: n.name }));
    },
    () => e,
  ),
  s = n("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 5: n } = o;
        return function () {
          b(o, n + 1);
        };
      })(o),
    ),
  ),
  b = c(
    5,
    (o, n) => {
      i(o[1], n), s(o);
    },
    () => v,
  ),
  f = r(5, (o, n) => i(o[0], n)),
  k = r(4, (o, n) => i(o[1], n)),
  g = r(3, (o, n) => {
    k(o, n.count), f(o, n.name);
  }),
  l = r(2, (o, n) => g(o, n[0]));
a(
  "b0",
  d("<div>Count (<!>): <!></div>", "Db%c%", void 0, void 0, void 0, () => l),
),
  u();
