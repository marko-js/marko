import type { TestConfig } from "../../main.test";

// A child's handler captures a function the parent binds to its own scope:
// the capture write ships it owner-bound.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a" },
    { label: "b" },
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
