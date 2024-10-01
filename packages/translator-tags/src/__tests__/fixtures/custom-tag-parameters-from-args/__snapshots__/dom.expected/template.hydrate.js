// size: 626 (min) 344 (brotli)

import {
  dynamicTagAttrs as o,
  register as i,
  on as t,
  value as n,
  data as c,
  intersections as d,
  intersection as r,
  queueSource as v,
  queueEffect as m,
  createRenderer as s,
  init as u,
} from "@marko/runtime-tags/dom";
const a = o(3, void 0, !0),
  b = r(
    3,
    (o) => {
      const { 6: i, 7: t } = o;
      a(o, () => [i, t]);
    },
    a,
  ),
  e = i("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 6: i, 7: t } = o;
        return function () {
          v(o, g, i + 1), v(o, k, t + 1);
        };
      })(o),
    ),
  ),
  f = r(2, (o) => {
    m(o, e);
  }),
  k = n(7, (o, i) => c(o[2], i), d([f, b])),
  g = n(6, (o, i) => c(o[1], i), d([f, b])),
  l = n(4, (o, i) => c(o[1], i)),
  p = n(3, (o, i) => c(o[0], i));
i(
  "b0",
  s(
    "<div>Counts: <!>,<!></div>",
    "Db%c%",
    void 0,
    void 0,
    void 0,
    n(2, (o, i) => {
      p(o, i[0]), l(o, i[1]);
    }),
  ),
),
  u();
