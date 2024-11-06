// size: 498 (min) 318 (brotli)

import {
  dynamicTagAttrs as o,
  register as i,
  on as t,
  state as n,
  data as c,
  queueEffect as d,
  intersection as r,
  createRendererWithOwner as m,
  value as v,
  init as s,
} from "@marko/runtime-tags/dom";
const u = o(2),
  a = r(
    2,
    (o) => {
      const { 5: i } = o;
      u(o, () => i);
    },
    () => u,
  ),
  b = i("a0", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 5: i } = o;
        return function () {
          e(o, i + 1);
        };
      })(o),
    ),
  ),
  e = n(
    5,
    (o, i) => {
      c(o[1], i), d(o, b);
    },
    () => a,
  ),
  f = v(2, (o, i) => c(o[0], i)),
  k = v(1, (o, i) => f(o, i[0]));
i(
  "b0",
  m("<div>Count: <!></div>", "Db%", void 0, void 0, void 0, () => k),
),
  s();
