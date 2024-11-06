// size: 580 (min) 193 (brotli)

import * as e from "@marko/runtime-tags/dom";
import { init as t } from "@marko/runtime-tags/dom";
const c = e.register(
    "a0",
    (e) =>
      function (t) {
        o(e, t);
      },
  ),
  a = e.register(
    "a1",
    (e) =>
      function (t) {
        o(e, t);
      },
  ),
  l = e.register(
    "a1",
    (e) =>
      function (t) {
        o(e, t);
      },
  ),
  o = e.state(4, (t, o) => {
    e.controllable_input_checkedValue(t, 0, o, c(t), "a"),
      e.controllable_input_checkedValue(t, 1, o, a(t), "b"),
      e.controllable_input_checkedValue(t, 2, o, l(t), "c"),
      e.data(t[3], o);
  });
e.effect("a2", (t) => {
  e.controllable_input_checkedValue_effect(t, 0),
    e.controllable_input_checkedValue_effect(t, 1),
    e.controllable_input_checkedValue_effect(t, 2);
}),
  t();
