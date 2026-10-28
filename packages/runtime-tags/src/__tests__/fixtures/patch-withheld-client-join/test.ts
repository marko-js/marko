import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    { label: "a" },
    (document: Document) => {
      (document.querySelector(".inc") as HTMLElement).click();
    },
    { label: "b" },
    (document: Document) => {
      const texts = Array.from(document.querySelectorAll("span"), getText);
      assert.deepEqual(texts, ["b:1", "b:0"]);
    },
  ],
};

function getText(node: Node) {
  return node.textContent;
}
