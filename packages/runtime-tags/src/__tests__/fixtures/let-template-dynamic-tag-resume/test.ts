import type { TestConfig } from "../../main.test";

// A `<let>` holding an imported template is written to the resume data, so the
// optimized client bundle must keep that template.
export const config: TestConfig = {
  steps: [{}, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
