// size: 456 (min) 230 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const n = t.intersection(2, ({ 4: t, 5: o }) => a(t * o)),
  a = t.value(6, (o) => t.data(3, o)),
  e = t.effect("a0", (o) =>
    t.on(
      o[0],
      "click",
      ((t) => {
        const { 5: o } = t;
        return function () {
          r(o + 1, t);
        };
      })(o),
    ),
  ),
  r = t.state(
    5,
    (o) => {
      t.data(1, o), e();
    },
    () => n,
  ),
  c = t.effect("a1", (o) =>
    t.on(
      o[2],
      "click",
      ((t) => {
        const { 4: o } = t;
        return function () {
          i(o + 1, t);
        };
      })(o),
    ),
  ),
  i = t.state(
    4,
    (t) => c(),
    () => n,
  );
t.setup(() => {
  i(0), r(1);
}),
  o();
