// size: 282 (min) 165 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const a = t.register(
    "a0",
    (t) =>
      function (e) {
        o(t, e);
      },
  ),
  o = t.state(2, (e, o) => {
    t.controllable_select_value(e, 0, o, a(e)), t.data(e[1], o);
  });
t.effect("a1", (e) => t.controllable_select_value_effect(e, 0)), e();
