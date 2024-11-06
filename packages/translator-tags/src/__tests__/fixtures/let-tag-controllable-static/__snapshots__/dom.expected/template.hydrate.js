// size: 370 (min) 210 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
t.register(
  "a0",
  (t) =>
    function (o) {
      e(t, o + 1);
    },
);
const a = t.effect("a1", (o) =>
    t.on(
      o[0],
      "click",
      ((t) => {
        const { 4: o, 5: a } = t;
        return function () {
          o(a + 1);
        };
      })(o),
    ),
  ),
  r = t.intersection(2, (t) => {
    a(t);
  }),
  n = t.state(
    5,
    (o, a) => t.data(o[2], a),
    () => r,
  ),
  e = t.state(
    3,
    (o, a) => {
      t.data(o[1], a), n(o, a, 1);
    },
    () => n,
  );
o();
