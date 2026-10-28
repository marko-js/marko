import type { TestConfig } from "../../main.test";

// A child's unassigned `<let>` joined with another of its changing inputs.
export const config: TestConfig = {
  patches: true,
  steps: [
    { v: "a", w: "1" },
    { v: "a", w: "2" },
  ],
};
