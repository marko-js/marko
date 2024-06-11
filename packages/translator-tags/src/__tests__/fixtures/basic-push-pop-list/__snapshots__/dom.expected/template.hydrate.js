// size: 564 (min) 305 (brotli)

import {
  register as o,
  createRenderer as n,
  on as c,
  value as t,
  queueSource as i,
  queueEffect as r,
  data as s,
  intersection as u,
  loopOf as a,
  init as l,
} from "@marko/runtime-tags/dom";
const m = t(2, (o, n) => s(o[0], n)),
  d = o(
    "a2",
    n(
      " ",
      " ",
      void 0,
      void 0,
      void 0,
      t(1, (o, n) => m(o, n[0])),
    ),
  ),
  e = o("a3", (o) =>
    c(
      o[1],
      "click",
      ((o) => {
        const { 3: n, 4: c } = o;
        return function () {
          const t = n + 1;
          i(o, p, t), i(o, g, [...c, t]);
        };
      })(o),
    ),
  ),
  f = u(2, (o) => {
    r(o, e);
  }),
  k = a(0, d),
  v = o("a4", (o) =>
    c(
      o[2],
      "click",
      ((o) => {
        const { 4: n } = o;
        return function () {
          i(o, g, n.slice(0, -1));
        };
      })(o),
    ),
  ),
  g = t(
    4,
    (o, n) => {
      r(o, v), k(o, [n]);
    },
    f,
  ),
  p = t(3, null, f);
l();
