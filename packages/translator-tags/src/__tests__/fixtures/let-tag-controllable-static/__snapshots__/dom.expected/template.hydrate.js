// size: 354 (min) 219 (brotli)

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
          o(t + 1);
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
      c(n[1], o), f(n, o, 1);
    },
    () => f,
  );
m();
