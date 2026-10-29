import assert from "node:assert";

import type { TestConfig } from "../../main.test";

// Two tags named by one `<let>`'s native name: the client keeps the name for
// both, and the patch fills their attributes.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { tag: "b", label: "a" },
    { tag: "i", label: "b" },
    (document: Document) => {
      assert.strictEqual(document.querySelectorAll("b").length, 2);
      assert.ok(
        Array.from(document.querySelectorAll("b")).every(
          (el) => el.getAttribute("title") === "b",
        ),
      );
    },
  ],
};
