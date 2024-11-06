// size: 286 (min) 162 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const e = t.register(
    "a0",
    (t) =>
      function (a) {
        o(t, a);
      },
  ),
  o = t.state(2, (a, o) => {
    t.controllable_textarea_value(a, 0, o, e(a)), t.data(a[1], o);
  });
t.effect("a1", (a) => t.controllable_textarea_value_effect(a, 0)), a();
