import type { TestConfig } from "../../main.test";
// An effect reads a template input a state join fills: only the input's own
// declaration re-runs it, so its registration ships it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a" },
    { label: "b" },
    (document: Document) => document.querySelector("button")!.click(),
    { label: "c" },
  ],
};
