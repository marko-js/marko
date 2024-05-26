// size: 590 (min) 324 (brotli)

import {
  register as n,
  on as t,
  queueSource as o,
  value as c,
  data as i,
  queueEffect as r,
  createRenderer as u,
  dynamicTagAttrs as s,
  conditional as a,
  init as m,
} from "@marko/runtime-tags/dom";
const d = n("Ux/0dqX4", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 2: t } = n;
        return function () {
          o(n, f, t + 1);
        };
      })(n),
    ),
  ),
  f = c(2, (n, t) => {
    i(n[1], t), r(n, d);
  }),
  e = (n) => {
    f(n, 0);
  },
  k = n(
    "nJhY4IXW",
    u("<button id=count> </button>", "/ D l&", (n) => {
      e(n[0]);
    }),
  ),
  l = s(0, k),
  p = a(0, (n) => l(n, () => ({})), l),
  b = n("O3LagfRZ", (n) =>
    t(
      n[1],
      "click",
      ((n) => {
        const { 2: t } = n;
        return function () {
          o(n, g, "span" === t ? "div" : "span");
        };
      })(n),
    ),
  ),
  g = c(
    2,
    (n, t) => {
      r(n, b), p(n, t || k);
    },
    p,
  );
m();
