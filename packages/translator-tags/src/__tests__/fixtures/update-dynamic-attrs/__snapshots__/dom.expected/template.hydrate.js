// size: 192 (min) 107 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as r } from "@marko/runtime-tags/dom";
t.effect("a0", (r) => t.attrsEvents(r, 1)),
  t.effect("a1", (r) => {
    t.attrsEvents(r, 0), t.attrsEvents(r, 2);
  }),
  r();
