// size: 586 (min) 308 (brotli)

import {
  register as n,
  on as t,
  state as o,
  data as c,
  queueEffect as i,
  createRendererWithOwner as u,
  dynamicTagAttrs as r,
  conditional as s,
  init as a,
} from "@marko/runtime-tags/dom";
const m = n("a0", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 2: t } = n;
        return function () {
          b(n, t + 1);
        };
      })(n),
    ),
  ),
  b = o(2, (n, t) => {
    c(n[1], t), i(n, m);
  });
const f = n(
    "b0",
    u("<button id=count> </button>", "/ D l&", (n) => {
      !(function (n) {
        b(n, 0);
      })(n[0]);
    }),
  ),
  d = r(0, f),
  e = s(
    0,
    (n) => d(n, () => ({})),
    () => d,
  ),
  k = n("b1", (n) =>
    t(
      n[1],
      "click",
      ((n) => {
        const { 2: t } = n;
        return function () {
          l(n, "span" === t ? "div" : "span");
        };
      })(n),
    ),
  ),
  l = o(
    2,
    (n, t) => {
      i(n, k), e(n, t || f(n));
    },
    () => e,
  );
a();
