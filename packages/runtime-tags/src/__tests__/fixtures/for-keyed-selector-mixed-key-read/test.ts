import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) =>
  (document.querySelector(selector) as HTMLButtonElement).click();

// The span compares the loop key *and* reads the item, so the selector collapse
// must keep `row` referenced: relabeling row 1 (same id) must update the span.
export const config: TestConfig = {
  steps: [{}, click("button.relabel"), click("button.relabel")],
};
