import assert from "assert";

import type { TestConfig } from "../../main.test";

// A child with a tag var inside a branch constructs from the frame; the
// var's write-back wires the constructed child, so a handler reads it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    (document: Document) => {
      (document.querySelector("#read") as HTMLButtonElement).click();
      assert.strictEqual(
        (document.querySelector("main") as HTMLElement).dataset.tag,
        "DIV",
      );
    },
  ],
};
