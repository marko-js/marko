import type { TestConfig } from "../../main.test";

// Re-rendering an identical list must reuse every branch (no DOM churn), even
// for an item whose `by` key is nullish. The Change log after clicking should
// be empty.
function click(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, click],
};
