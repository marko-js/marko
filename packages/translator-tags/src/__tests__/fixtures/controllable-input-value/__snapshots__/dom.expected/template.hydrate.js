// size: 280 (min) 168 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const o = t.register(
    "a0",
    (t) =>
      function (a) {
        e(t, a);
      },
  ),
  e = t.state(2, (a, e) => {
    t.controllable_input_value(a, 0, e, o(a)), t.data(a[1], e);
  });
t.effect("a1", (a) => t.controllable_input_value_effect(a, 0)), a();
