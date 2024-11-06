// size: 392 (min) 219 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const n = t.intersection(2, (o) => {
  const {
    _: { 1: n },
    3: e,
  } = o;
  t.attr(o[0], "data-selected", n === e),
    t.attr(o[0], "data-multiple", e % n == 0);
});
t.effect("a0", (o) =>
  t.on(
    o[0],
    "click",
    ((t) => {
      const { 3: o } = t;
      return function () {
        r(t._, o);
      };
    })(o),
  ),
);
const e = t.closure(1, null, void 0, () => n),
  r = t.state(1, null, () => t.inLoopScope(e, 0));
o();
