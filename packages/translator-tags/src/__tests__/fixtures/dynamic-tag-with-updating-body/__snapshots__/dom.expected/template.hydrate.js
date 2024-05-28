// size: 569 (min) 306 (brotli)

import {
  register as n,
  on as t,
  queueSource as o,
  value as c,
  data as i,
  queueEffect as r,
  createRenderer as u,
  dynamicTagAttrs as s,
  conditional as m,
  init as a,
} from "@marko/runtime-tags/dom";
const e = n("g", (n) =>
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
    i(n[1], t), r(n, e);
  }),
  d = (n) => {
    f(n, 0);
  },
  k = n(
    "e",
    u("<button id=count> </button>", "/ D l&", (n) => {
      d(n[0]);
    }),
  ),
  l = s(0, k),
  p = m(0, (n) => l(n, () => ({})), l),
  b = n("f", (n) =>
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
a();
