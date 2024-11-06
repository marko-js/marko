// size: 209 (min) 118 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
t.effect("a0", (t) => {
  ((t) => {
    const { 0: e } = t;
    return async () => {
      document.getElementById("ref").textContent = await e;
    };
  })(t)();
}),
  e();
