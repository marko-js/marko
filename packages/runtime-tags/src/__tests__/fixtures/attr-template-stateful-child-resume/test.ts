import type { TestConfig } from "../../main.test";

// A stateful child writes an imported template its static parent passes as an
// attribute, so the parent ships to register that template.
export const config: TestConfig = {
  steps: [{}, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
