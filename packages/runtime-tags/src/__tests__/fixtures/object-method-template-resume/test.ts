import type { TestConfig } from "../../main.test";

// The registered `get` ships the template it returns, so the template needs no
// registration of its own.
export const config: TestConfig = {
  steps: [{}, click, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
