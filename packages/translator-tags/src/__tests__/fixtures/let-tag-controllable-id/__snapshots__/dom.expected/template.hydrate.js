// size: 439 (min) 265 (brotli)

import {
  register as n,
  queueSource as o,
  on as t,
  initValue as c,
  value as r,
  data as i,
  queueControllableSource as m,
  intersection as a,
  queueEffect as u,
  init as f,
} from "@marko/runtime-tags/dom";
n(
  "a0",
  (n) =>
    function (t) {
      o(n, g, t + 1);
    },
);
const s = n("a1", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 4: o, 5: t } = n;
        return function () {
          m(n, k, o, t + 1);
        };
      })(n),
    ),
  ),
  e = a(2, (n) => {
    u(n, s);
  }),
  k = r(
    5,
    (n, o) => i(n[2], o),
    () => e,
  ),
  d = c(5, k),
  g = r(
    3,
    (n, o) => {
      i(n[1], o), (n[4] ? k : d)(n, o);
    },
    () => k,
  );
f();
