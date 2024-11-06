// size: 196 (min) 125 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const m = t.state(2, (o, m) => t.data(o[1], m));
t.effect("a0", (o) =>
  t.on(o[0], "click", function () {
    m(o, 1);
  }),
),
  o();
