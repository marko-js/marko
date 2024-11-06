// size: 292 (min) 167 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const o = t.register(
    "a0",
    (t) =>
      function (e) {
        r(t, e);
      },
  ),
  r = t.state(2, (e, r) => {
    t.controllable_input_checked(e, 0, r, o(e)), t.data(e[1], String(r));
  });
t.effect("a1", (e) => t.controllable_input_checked_effect(e, 0)), e();
