// size: 172 (min) 111 (brotli)

import { effect as t, init as e } from "@marko/runtime-tags/dom";
t("a0", (t) => {
  ((t) => {
    const { 0: e } = t;
    return async () => {
      document.getElementById("ref").textContent = await e;
    };
  })(t)();
}),
  e();
