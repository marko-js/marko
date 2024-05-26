// size: 582 (min) 339 (brotli)

import {
  register as o,
  createRenderer as c,
  on as n,
  value as t,
  queueSource as i,
  queueEffect as r,
  data as s,
  intersection as l,
  loopOf as u,
  init as m,
} from "@marko/runtime-tags/dom";
const d = t(2, (o, c) => s(o[0], c)),
  e = o(
    "+Aq0sYza",
    c(
      " ",
      " ",
      void 0,
      void 0,
      void 0,
      t(1, (o, c) => d(o, c[0])),
    ),
  ),
  k = o("F98P4Q1l", (o) =>
    n(
      o[1],
      "click",
      ((o) => {
        const { 3: c, 4: n } = o;
        return function () {
          const t = c + 1;
          i(o, p, t), i(o, g, [...n, t]);
        };
      })(o),
    ),
  ),
  a = l(2, (o) => {
    r(o, k);
  }),
  f = u(0, e),
  v = o("1okcBoHI", (o) =>
    n(
      o[2],
      "click",
      ((o) => {
        const { 4: c } = o;
        return function () {
          i(o, g, c.slice(0, -1));
        };
      })(o),
    ),
  ),
  g = t(
    4,
    (o, c) => {
      r(o, v), f(o, [c]);
    },
    a,
  ),
  p = t(3, null, a);
m();
