import assert from "node:assert";

import type { TestConfig } from "../../main.test";

// patch-client-let-native-twice without patches.
export const config: TestConfig = {
  equivalent: false,
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
