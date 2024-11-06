// size: 375 (min) 220 (brotli)

import {
  register as t,
  on as o,
  state as n,
  queueEffect as r,
  intersection as c,
  data as i,
  init as m,
} from "@marko/runtime-tags/dom";
const e = c(2, (t) => {
    const { 3: o, 4: n } = t;
    i(t[1], o.format(n));
  }),
  u = t("a0", (t) =>
    o(
      t[0],
      "click",
      ((t) => {
        const { 4: o } = t;
        return function () {
          a(t, o + 1);
        };
      })(t),
    ),
  ),
  a = n(
    4,
    (t, o) => r(t, u),
    () => e,
  );
t("b1", function (t) {
  return "$" + t.toFixed(2);
}),
  t("b0", (t) => "$" + t.toFixed(2)),
  m();
