// size: 368 (min) 215 (brotli)

import {
  effect as t,
  on as o,
  state as n,
  intersection as r,
  data as c,
  register as i,
  init as m,
} from "@marko/runtime-tags/dom";
const e = r(2, (t) => {
    const { 3: o, 4: n } = t;
    c(t[1], o.format(n));
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
    (t, o) => u(t),
    () => e,
  );
i("b1", function (t) {
  return "$" + t.toFixed(2);
}),
  i("b0", (t) => "$" + t.toFixed(2)),
  m();
