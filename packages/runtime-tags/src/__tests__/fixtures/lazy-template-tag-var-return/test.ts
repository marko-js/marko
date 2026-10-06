import type { TestConfig } from "../../main.test";

// A lazily imported template's `<return>` is known before it loads, so a debug
// build's check of the dynamic tag's variable passes.
export const config: TestConfig = {
  steps: [{}, click, wait],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
function wait() {
  return new Promise((resolve) => setTimeout(resolve, 10));
}
