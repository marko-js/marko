// size: 586 (min) 325 (brotli)

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
  d = t(1, (o, n) => m(o, n[0])),
  e = o(
    "a0",
    n(" ", " ", void 0, void 0, void 0, () => d),
  ),
  f = o("a1", (o) =>
    c(
      o[1],
      "click",
      ((o) => {
        const { 3: n, 4: c } = o;
        return function () {
          const t = n + 1;
          i(o, b, t), i(o, p, [...c, t]);
        };
      })(o),
    ),
  ),
  k = u(2, (o) => {
    r(o, f);
  }),
  v = a(0, e),
  g = o("a2", (o) =>
    c(
      o[2],
      "click",
      ((o) => {
        const { 4: n } = o;
        return function () {
          i(o, p, n.slice(0, -1));
        };
      })(o),
    ),
  ),
  p = t(
    4,
    (o, n) => {
      r(o, g), v(o, [n]);
    },
    () => k,
  ),
  b = t(3, null, () => k);
l();
