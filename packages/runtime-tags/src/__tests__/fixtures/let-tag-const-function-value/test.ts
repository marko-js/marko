import type { TestConfig } from "../../main.test";

// A let holds its initializer in its own slot, so a function reaching it
// through a `<const>` registers when the let serializes.
export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
