import type { TestConfig } from "../../main.test";

// A child writes an imported template its parent passes as an attribute, so the
// optimized client bundle must keep that template.
export const config: TestConfig = {
  steps: [{}, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
