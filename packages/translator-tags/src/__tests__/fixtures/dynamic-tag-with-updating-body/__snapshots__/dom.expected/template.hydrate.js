// size: 572 (min) 302 (brotli)

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
const b = n("a1", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 2: t } = n;
        return function () {
          o(n, d, t + 1);
        };
      })(n),
    ),
  ),
  d = c(2, (n, t) => {
    i(n[1], t), r(n, b);
  }),
  e = (n) => {
    d(n, 0);
  },
  f = n(
    "b1",
    u("<button id=count> </button>", "/ D l&", (n) => {
      e(n[0]);
    }),
  ),
  k = s(0, f),
  l = a(0, (n) => k(n, () => ({})), k),
  p = n("b2", (n) =>
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
      r(n, p), l(n, t || f);
    },
    l,
  );
m();
