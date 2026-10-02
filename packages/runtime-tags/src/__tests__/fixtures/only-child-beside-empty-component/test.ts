import type { TestConfig } from "../../main.test";

// A child component rendering nothing leaves its element to a branch beside it,
// which the element addresses instead of a marker of its own.
export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
