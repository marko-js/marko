// size: 481 (min) 290 (brotli)

import {
  register as o,
  on as t,
  createRenderer as n,
  dynamicTagAttrs as i,
  queueSource as c,
  value as d,
  data as m,
  queueEffect as r,
  init as u,
} from "@marko/runtime-tags/dom";
const e = o("c", (o) =>
    t(
      o[2],
      "click",
      ((o) => {
        const { 7: t } = o;
        return function () {
          c(o, l, t + 1);
        };
      })(o),
    ),
  ),
  l = d(7, (o, t) => {
    m(o[1], t), m(o[3], t), r(o, e);
  }),
  v = d(6, (o, t) => m(o[0], t)),
  a = d(5, (o, t) => v(o, t.name));
o(
  "d",
  n(
    "<div>Hello <!> <!></div><button> </button>",
    "Db%c%l D ",
    (o) => {
      l(o, 1);
    },
    void 0,
    void 0,
    d(4, (o, t) => a(o, t[0])),
  ),
),
  i(0),
  u();
