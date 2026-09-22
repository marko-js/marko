import type { TestConfig } from "../../main.test";

// A controllable let serializes a handler read through a `<const>`, so that
// function registers.
export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
