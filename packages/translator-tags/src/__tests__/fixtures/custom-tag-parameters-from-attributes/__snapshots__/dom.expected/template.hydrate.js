// size: 609 (min) 341 (brotli)

import {
  dynamicTagAttrs as o,
  register as n,
  on as t,
  queueSource as c,
  value as i,
  data as m,
  queueEffect as a,
  intersection as d,
  createRendererWithOwner as r,
  init as u,
} from "@marko/runtime-tags/dom";
const e = o(2),
  v = d(
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
          c(o, b, n + 1);
        };
      })(o),
    ),
  ),
  b = i(
    5,
    (o, n) => {
      m(o[1], n), a(o, s);
    },
    () => v,
  ),
  f = i(5, (o, n) => m(o[0], n)),
  k = i(4, (o, n) => m(o[1], n)),
  g = i(3, (o, n) => {
    k(o, n.count), f(o, n.name);
  }),
  l = i(2, (o, n) => g(o, n[0]));
n(
  "b0",
  r("<div>Count (<!>): <!></div>", "Db%c%", void 0, void 0, void 0, () => l),
),
  u();
