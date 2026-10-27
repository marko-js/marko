import type { TestConfig } from "../../main.test";

// A dynamic tag variable in a branch, read by an effect, is declared
// before the patch write that reads it.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: true, type: "section" }],
};
