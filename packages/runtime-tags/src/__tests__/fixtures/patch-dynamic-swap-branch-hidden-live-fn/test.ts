import type { TestConfig } from "../../main.test";

// A value read in content its consumer may withhold, captured by a function a
// child's effect calls: the effect re-runs once per change of the value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "a0", show: true, flag: false },
    { a: "a1", show: false, flag: true },
    { a: "a2", show: true, flag: true },
  ],
};
