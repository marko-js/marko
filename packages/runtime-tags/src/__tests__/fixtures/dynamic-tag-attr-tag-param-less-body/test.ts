import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A body without params passed to a dynamic tag with attribute tags.
export const config: TestConfig = {
  steps: [{}, click],
};
