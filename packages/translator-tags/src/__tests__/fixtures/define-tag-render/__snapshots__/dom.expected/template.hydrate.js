// size: 495 (min) 297 (brotli)

import {
  register as o,
  on as t,
  createRenderer as n,
  dynamicTagAttrs as i,
  queueSource as m,
  value as r,
  data as c,
  queueEffect as u,
  init as d,
} from "@marko/runtime-tags/dom";
const e = o("7uJQFAm8", (o) =>
    t(
      o[2],
      "click",
      ((o) => {
        const { 7: t } = o;
        return function () {
          m(o, l, t + 1);
        };
      })(o),
    ),
  ),
  l = r(7, (o, t) => {
    c(o[1], t), c(o[3], t), u(o, e);
  }),
  v = r(6, (o, t) => c(o[0], t)),
  a = r(5, (o, t) => v(o, t.name));
o(
  "g8CW2rOY",
  n(
    "<div>Hello <!> <!></div><button> </button>",
    "Db%c%l D ",
    (o) => {
      l(o, 1);
    },
    void 0,
    void 0,
    r(4, (o, t) => a(o, t[0])),
  ),
),
  i(0),
  d();
