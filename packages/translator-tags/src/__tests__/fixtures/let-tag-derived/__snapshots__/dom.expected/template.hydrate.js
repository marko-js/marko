// size: 230 (min) 154 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const m = t.effect("a0", (o) =>
    t.on(
      o[0],
      "click",
      ((t) => {
        const { 6: o } = t;
        return () => (r(t, o + 1), o);
      })(o),
    ),
  ),
  r = t.state(6, (o, r) => {
    t.data(o[2], r), m(o);
  });
o();
