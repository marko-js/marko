// size: 607 (min) 322 (brotli)

import {
  register as n,
  on as t,
  queueSource as o,
  value as c,
  data as i,
  queueEffect as u,
  createRendererWithOwner as r,
  dynamicTagAttrs as s,
  conditional as a,
  init as m,
} from "@marko/runtime-tags/dom";
const b = n("a0", (n) =>
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
    i(n[1], t), u(n, b);
  });
const d = n(
    "b0",
    r("<button id=count> </button>", "/ D l&", (n) => {
      !(function (n) {
        f(n, 0);
      })(n[0]);
    }),
  ),
  e = s(0, d),
  k = a(
    0,
    (n) => e(n, () => ({})),
    () => e,
  ),
  l = n("b1", (n) =>
    t(
      n[1],
      "click",
      ((n) => {
        const { 2: t } = n;
        return function () {
          o(n, p, "span" === t ? "div" : "span");
        };
      })(n),
    ),
  ),
  p = c(
    2,
    (n, t) => {
      u(n, l), k(n, t || d(n));
    },
    () => k,
  );
m();
