// size: 249 (min) 159 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const m = t.effect("a0", (o) => {
    const { 2: m } = o;
    t.on(
      o[0],
      "click",
      m <= 1 &&
        ((t) => {
          const { 2: o } = t;
          return () => {
            r(t, o + 1);
          };
        })(o),
    );
  }),
  r = t.state(2, (o, r) => {
    t.data(o[1], r), m(o);
  });
o();
