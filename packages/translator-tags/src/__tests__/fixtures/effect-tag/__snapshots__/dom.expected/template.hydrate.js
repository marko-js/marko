// size: 173 (min) 103 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as m } from "@marko/runtime-tags/dom";
t.effect("a0", (t) => {
  const { 0: m } = t;
  document.getElementById("ref").textContent = m;
}),
  m();
