import type { TestConfig } from "../../main.test";

// A child reads an object carrying a function bound to a sibling's scope.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a" },
    { label: "b" },
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
