// size: 502 (min) 306 (brotli)

import {
  register as o,
  on as t,
  createRendererWithOwner as n,
  dynamicTagAttrs as i,
  queueSource as c,
  value as m,
  data as r,
  queueEffect as a,
  init as d,
} from "@marko/runtime-tags/dom";
const u = o("a0", (o) =>
    t(
      o[2],
      "click",
      ((o) => {
        const { 7: t } = o;
        return function () {
          c(o, e, t + 1);
        };
      })(o),
    ),
  ),
  e = m(7, (o, t) => {
    r(o[1], t), r(o[3], t), a(o, u);
  }),
  l = m(6, (o, t) => r(o[0], t)),
  v = m(5, (o, t) => l(o, t.name)),
  b = m(4, (o, t) => v(o, t[0]));
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
