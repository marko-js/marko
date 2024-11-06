// size: 311 (min) 175 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as r } from "@marko/runtime-tags/dom";
import e from "./test-log";
t.register("a1", function () {
  e.static += "rendered";
}),
  t.register(
    "a0",
    (t) =>
      function () {
        e.const += "rendered";
      },
  );
const o = t.state(3, (r, e) => t.data(r[0], e));
t.effect("a2", (t) => o(t, JSON.stringify(e))), r();
