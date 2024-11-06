// size: 460 (min) 226 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const n = t.intersection(2, (t) => {
    const { 4: o, 5: n } = t;
    a(t, o * n);
  }),
  a = t.value(6, (o, n) => t.data(o[3], n)),
  c = t.effect("a0", (o) =>
    t.on(
      o[0],
      "click",
      ((t) => {
        const { 5: o } = t;
        return function () {
          e(t, o + 1);
        };
      })(o),
    ),
  ),
  e = t.state(
    5,
    (o, n) => {
      t.data(o[1], n), c(o);
    },
    () => n,
  ),
  r = t.effect("a1", (o) =>
    t.on(
      o[2],
      "click",
      ((t) => {
        const { 4: o } = t;
        return function () {
          i(t, o + 1);
        };
      })(o),
    ),
  ),
  i = t.state(
    4,
    (t, o) => r(t),
    () => n,
  );
o();
