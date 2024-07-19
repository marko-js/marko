// size: 431 (min) 251 (brotli)

import {
  register as o,
  createRenderer as i,
  on as t,
  value as c,
  queueSource as n,
  queueEffect as r,
  loopOf as d,
  data as m,
  init as a,
} from "@marko/runtime-tags/dom";
const e = c(3, (o, i) => m(o[0], i)),
  s = c(2, (o, i) => e(o, i.text)),
  u = d(
    0,
    o(
      "a1",
      i(
        " ",
        " ",
        void 0,
        void 0,
        void 0,
        c(1, (o, i) => s(o, i[0])),
      ),
    ),
  ),
  v = o("a2", (o) =>
    t(
      o[1],
      "click",
      ((o) => {
        const { 2: i } = o;
        return function () {
          n(o, f, [...i.slice(1), i[0]]);
        };
      })(o),
    ),
  ),
  f = c(2, (o, i) => {
    r(o, v), u(o, [i, "id"]);
  });
a();
