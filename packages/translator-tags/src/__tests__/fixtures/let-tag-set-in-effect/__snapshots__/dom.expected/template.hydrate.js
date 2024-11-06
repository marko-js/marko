// size: 231 (min) 144 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const m = t.state(3, (a, m) => t.data(a[1], m)),
  o = t.effect("a0", (t) => {
    const { 2: a } = t;
    m(t, a), r(t, 2);
  }),
  r = t.state(2, (a, m) => {
    t.data(a[0], m), o(a);
  });
a();
