// size: 174 (min) 110 (brotli)

import { register as t, init as e } from "@marko/runtime-tags/dom";
t("a0", (t) => {
  ((t) => {
    const { 0: e } = t;
    return async () => {
      document.getElementById("ref").textContent = await e;
    };
  })(t)();
}),
  e();
