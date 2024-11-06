// size: 353 (min) 180 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const a = t.intersection(2, (o) => {
    const { 5: a, 6: n } = o;
    t.data(o[4], a + n);
  }),
  n = t.state(
    6,
    (o, a) => t.data(o[3], a),
    () => a,
  ),
  c = t.state(
    5,
    (o, a) => t.data(o[1], a),
    () => a,
  );
t.effect("a0", (o) => {
  t.on(o[0], "click", function () {
    c(o, 10);
  }),
    t.on(o[2], "click", function () {
      n(o, 5);
    });
}),
  o();
