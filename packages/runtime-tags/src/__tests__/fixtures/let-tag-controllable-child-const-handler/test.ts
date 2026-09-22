import type { TestConfig } from "../../main.test";

// A child's controllable let serializes the handler a parent passes it, so
// the parent registers that function.
export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
