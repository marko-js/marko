// size: 389 (min) 225 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const r = t.intersection(2, (o) => {
    const { 3: r, 4: e } = o;
    t.data(o[1], r.format(e));
  }),
  e = t.effect("a0", (o) =>
    t.on(
      o[0],
      "click",
      ((t) => {
        const { 4: o } = t;
        return function () {
          n(t, o + 1);
        };
      })(o),
    ),
  ),
  n = t.state(
    4,
    (t, o) => e(t),
    () => r,
  );
t.register("b1", function (t) {
  return "$" + t.toFixed(2);
}),
  t.register("b0", (t) => "$" + t.toFixed(2)),
  o();
