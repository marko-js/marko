// size: 361 (min) 216 (brotli)

import {
  register as n,
  on as o,
  state as t,
  data as c,
  intersection as r,
  queueEffect as i,
  init as m,
} from "@marko/runtime-tags/dom";
n(
  "a0",
  (n) =>
    function (o) {
      s(n, o + 1);
    },
);
const a = n("a1", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const { 4: o, 5: t } = n;
        return function () {
          f(n, t + 1, o);
        };
      })(n),
    ),
  ),
  u = r(2, (n) => {
    i(n, a);
  }),
  f = t(
    5,
    (n, o) => c(n[2], o),
    () => u,
  ),
  s = t(
    3,
    (n, o) => {
      c(n[1], o), f(n, o, n[4]);
    },
    () => f,
  );
m();
