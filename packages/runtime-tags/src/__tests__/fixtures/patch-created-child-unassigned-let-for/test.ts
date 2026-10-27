import type { TestConfig } from "../../main.test";

// A created child's `<for>` over a `<let>` nothing assigns: the patch renders
// the rows, so the child keeps no client code for them.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, items: ["a"] },
    { on: true, items: ["a", "b"] },
    { on: false, items: ["a"] },
    { on: true, items: ["c"] },
  ],
};
