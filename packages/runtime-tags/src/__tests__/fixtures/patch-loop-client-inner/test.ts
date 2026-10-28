import type { TestConfig } from "../../main.test";

// A stateful loop inside a branch on input: the outer shell
// drops (its interior listing has no channel), so revealing navigates.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }],
};
