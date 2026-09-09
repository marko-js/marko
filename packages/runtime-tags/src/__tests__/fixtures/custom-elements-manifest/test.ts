import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => {
      const badge = document.querySelector("probe-badge")!;
      const Badge = document.defaultView!.customElements.get("probe-badge")!;
      assert.ok(badge instanceof Badge);
      assert.equal(badge.getAttribute("label"), "hello");
      assert.equal(badge.textContent, "child");
    },
  ],
};
