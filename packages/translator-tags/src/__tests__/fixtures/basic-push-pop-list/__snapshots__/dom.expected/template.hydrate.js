// size: 565 (min) 317 (brotli)

import {
  register as o,
  createRenderer as n,
  effect as c,
  on as t,
  value as i,
  state as r,
  data as s,
  intersection as u,
  loopOf as a,
  init as l,
} from "@marko/runtime-tags/dom";
const m = i(2, (o, n) => s(o[0], n)),
  d = i(1, (o, n) => m(o, n[0])),
  e = o(
    "a0",
    n(" ", " ", void 0, void 0, void 0, () => d),
  ),
  f = c("a1", (o) =>
    t(
      o[1],
      "click",
      ((o) => {
        const { 3: n, 4: c } = o;
        return function () {
          const t = n + 1;
          b(o, t), p(o, [...c, t]);
        };
      })(o),
    ),
  ),
  k = u(2, (o) => {
    f(o);
  }),
  v = a(0, e),
  g = c("a2", (o) =>
    t(
      o[2],
      "click",
      ((o) => {
        const { 4: n } = o;
        return function () {
          p(o, n.slice(0, -1));
        };
      })(o),
    ),
  ),
  p = r(
    4,
    (o, n) => {
      g(o), v(o, [n]);
    },
    () => k,
  ),
  b = r(3, null, () => k);
l();
