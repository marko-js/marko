// size: 394 (min) 228 (brotli)

import {
  register as t,
  on as o,
  queueSource as n,
  value as r,
  queueEffect as c,
  intersection as i,
  data as m,
  init as e,
} from "@marko/runtime-tags/dom";
const u = i(2, (t) => {
    const { 3: o, 4: n } = t;
    m(t[1], o.format(n));
  }),
  a = t("a0", (t) =>
    o(
      t[0],
      "click",
      ((t) => {
        const { 4: o } = t;
        return function () {
          n(t, f, o + 1);
        };
      })(t),
    ),
  ),
  f = r(
    4,
    (t, o) => c(t, a),
    () => u,
  );
t("b1", function (t) {
  return "$" + t.toFixed(2);
}),
  t("b0", (t) => "$" + t.toFixed(2)),
  e();
