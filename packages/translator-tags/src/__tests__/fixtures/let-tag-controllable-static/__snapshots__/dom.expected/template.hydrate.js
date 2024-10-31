// size: 371 (min) 216 (brotli)

import {
  register as n,
  queueSource as o,
  on as t,
  value as c,
  data as r,
  intersection as i,
  queueEffect as m,
  init as a,
} from "@marko/runtime-tags/dom";
n(
  "a0",
  (n) =>
    function (t) {
      o(n, e, t + 1);
    },
);
const u = n("a1", (n) =>
    t(
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
  f = i(2, (n) => {
    m(n, u);
  }),
  s = c(
    5,
    (n, o) => r(n[2], o),
    () => f,
  ),
  e = c(
    3,
    (n, o) => {
      r(n[1], o), s(n, o);
    },
    () => s,
  );
a();
