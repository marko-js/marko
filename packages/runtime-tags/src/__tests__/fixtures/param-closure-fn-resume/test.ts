import type { TestConfig } from "../../main.test";

// The child writes `bar` only while its parent changes `show`, so the stateful
// parent's bundle must register it.
export const config: TestConfig = {
  steps: [{}, click, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
