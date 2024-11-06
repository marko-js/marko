// size: 403 (min) 193 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const r = t.effect("a0", (o) => {
    t.attrsEvents(o, 0), t.attrsEvents(o, 1), t.attrsEvents(o, 2);
  }),
  a = (o) => {
    t.attrs(o, 0, { value: "a" }),
      t.attrs(o, 1, { value: "b" }),
      t.attrs(o, 2, { value: "c" }),
      r(o);
  },
  e = t.register(
    "a1",
    t.createRendererWithOwner(
      "<option>A</option><option>B</option><option>C</option>",
      " b b ",
      a,
    ),
  );
t.dynamicTagAttrs(0, e), o();
