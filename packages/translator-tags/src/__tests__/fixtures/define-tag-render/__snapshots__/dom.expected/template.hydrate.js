// size: 487 (min) 289 (brotli)

import {
  effect as o,
  on as t,
  register as n,
  createRendererWithOwner as i,
  dynamicTagAttrs as c,
  state as m,
  data as r,
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
  e = m(7, (o, t) => {
    r(o[1], t), r(o[3], t), u(o);
  }),
  l = a(6, (o, t) => r(o[0], t)),
  v = a(5, (o, t) => l(o, t.name)),
  b = a(4, (o, t) => v(o, t[0]));
n(
  "a1",
  i(
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
  c(0),
  d();
