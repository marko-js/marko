import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A new branch's scripts each run once as it is created, and only the one
// reading a closure runs again when that changes.
export const config: TestConfig = {
  steps: [{}, click, click],
};
