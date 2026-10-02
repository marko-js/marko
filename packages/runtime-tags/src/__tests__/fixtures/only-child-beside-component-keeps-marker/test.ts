import type { TestConfig } from "../../main.test";

// A child component rendering nothing still holds a scope, so a branch beside
// it keeps a marker of its own.
export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
