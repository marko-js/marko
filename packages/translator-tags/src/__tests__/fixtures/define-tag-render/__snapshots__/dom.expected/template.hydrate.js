// size: 494 (min) 295 (brotli)

import {
  register as o,
  on as t,
  createRendererWithOwner as n,
  dynamicTagAttrs as i,
  state as c,
  data as m,
  queueEffect as r,
  value as a,
  init as d,
} from "@marko/runtime-tags/dom";
const u = o("a0", (o) =>
    t(
      o[2],
      "click",
      ((o) => {
        const { 7: t } = o;
        return function () {
          e(o, t + 1);
        };
      })(o),
    ),
  ),
  e = c(7, (o, t) => {
    m(o[1], t), m(o[3], t), r(o, u);
  }),
  l = a(6, (o, t) => m(o[0], t)),
  v = a(5, (o, t) => l(o, t.name)),
  b = a(4, (o, t) => v(o, t[0]));
o(
  "a1",
  n(
    "<div>Hello <!> <!></div><button> </button>",
    "Db%c%l D ",
    (o) => {
      e(o, 1);
    },
    void 0,
    void 0,
    () => b,
  ),
),
  i(0),
  d();
