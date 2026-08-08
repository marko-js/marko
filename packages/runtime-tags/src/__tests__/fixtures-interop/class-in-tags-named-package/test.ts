import type { TestConfig } from "../../main.test";

// The `tags` directory here is its own package root, so templates inside it
// are not "within a tags directory" and may stay Class API.
export const config: TestConfig = {
  steps: [{}, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
