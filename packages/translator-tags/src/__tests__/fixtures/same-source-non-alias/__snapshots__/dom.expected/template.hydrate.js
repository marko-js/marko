// size: 339 (min) 199 (brotli)

import {
  register as t,
  on as n,
  queueSource as o,
  value as r,
  queueEffect as c,
  data as m,
  init as a,
} from "@marko/runtime-tags/dom";
const i = r(5, (t, n) => {
    m(t[1], n),
      ((t, n) => {
        m(t[2], n);
      })(t, n);
  }),
  s = r(4, (t, n) => i(t, n.a)),
  u = t("BtqSnvbh", (t) =>
    n(
      t[0],
      "click",
      ((t) => {
        const { 3: n } = t;
        return function () {
          o(t, e, n + 1);
        };
      })(t),
    ),
  ),
  e = r(3, (t, n) => {
    c(t, u), s(t, { a: n });
  });
a();
