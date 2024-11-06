// size: 652 (min) 355 (brotli)

import {
  dynamicTagAttrs as o,
  register as i,
  on as t,
  state as n,
  data as c,
  intersections as d,
  intersection as r,
  queueEffect as v,
  createRendererWithOwner as m,
  value as s,
  init as u,
} from "@marko/runtime-tags/dom";
const a = o(3, void 0, 1),
  b = r(
    3,
    (o) => {
      const { 6: i, 7: t } = o;
      a(o, () => [i, t]);
    },
    () => a,
  ),
  e = i("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 6: i, 7: t } = o;
        return function () {
          g(o, i + 1), k(o, t + 1);
        };
      })(o),
    ),
  ),
  f = r(2, (o) => {
    v(o, e);
  }),
  k = n(
    7,
    (o, i) => c(o[2], i),
    () => d([f, b]),
  ),
  g = n(
    6,
    (o, i) => c(o[1], i),
    () => d([f, b]),
  ),
  l = s(4, (o, i) => c(o[1], i)),
  p = s(3, (o, i) => c(o[0], i)),
  C = s(2, (o, i) => {
    p(o, i[0]), l(o, i[1]);
  });
i(
  "b0",
  m("<div>Counts: <!>,<!></div>", "Db%c%", void 0, void 0, void 0, () => C),
),
  u();
