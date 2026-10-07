import type { TestConfig } from "../../main.test";

// A parent writes the template a child returns as its tag variable, so the
// optimized client bundle must keep that template.
export const config: TestConfig = {
  steps: [{}, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
