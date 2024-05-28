// size: 561 (min) 307 (brotli)

import {
  register as o,
  createRenderer as n,
  on as c,
  value as t,
  queueSource as i,
  queueEffect as r,
  data as s,
  intersection as u,
  loopOf as d,
  init as e,
} from "@marko/runtime-tags/dom";
const l = t(2, (o, n) => s(o[0], n)),
  m = o(
    "d",
    n(
      " ",
      " ",
      void 0,
      void 0,
      void 0,
      t(1, (o, n) => l(o, n[0])),
    ),
  ),
  f = o("e", (o) =>
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
  k = u(2, (o) => {
    r(o, f);
  }),
  v = d(0, m),
  a = o("f", (o) =>
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
      r(o, a), v(o, [n]);
    },
    k,
  ),
  p = t(3, null, k);
e();
