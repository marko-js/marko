// size: 386 (min) 221 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const e = t.intersection(2, (o) => {
  const {
    _: { 1: e },
    3: r,
  } = o;
  t.attr(o[0], "data-selected", e === r),
    t.attr(o[0], "data-multiple", r % e == 0);
});
t.effect("a0", (o) =>
  t.on(
    o[0],
    "click",
    ((t) => {
      const { 3: o } = t;
      return function () {
        a(t._, o);
      };
    })(o),
  ),
);
const r = t.closure(1, 0, void 0, () => e),
  a = t.state(1, 0, () => t.inLoopScope(r, 0));
o();
