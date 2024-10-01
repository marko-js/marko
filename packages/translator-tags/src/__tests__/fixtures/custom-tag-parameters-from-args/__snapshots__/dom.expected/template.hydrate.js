// size: 654 (min) 349 (brotli)

import {
  dynamicTagAttrs as o,
  register as i,
  on as t,
  queueSource as n,
  value as c,
  data as d,
  intersections as r,
  intersection as v,
  queueEffect as m,
  createRenderer as s,
  init as u,
} from "@marko/runtime-tags/dom";
const a = o(3, void 0, !0),
  b = v(
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
          n(o, g, i + 1), n(o, k, t + 1);
        };
      })(o),
    ),
  ),
  f = v(2, (o) => {
    m(o, e);
  }),
  k = c(
    7,
    (o, i) => d(o[2], i),
    () => r([f, b]),
  ),
  g = c(
    6,
    (o, i) => d(o[1], i),
    () => r([f, b]),
  ),
  l = c(4, (o, i) => d(o[1], i)),
  p = c(3, (o, i) => d(o[0], i)),
  C = c(2, (o, i) => {
    p(o, i[0]), l(o, i[1]);
  });
i(
  "b0",
  s("<div>Counts: <!>,<!></div>", "Db%c%", void 0, void 0, void 0, () => C),
),
  u();
