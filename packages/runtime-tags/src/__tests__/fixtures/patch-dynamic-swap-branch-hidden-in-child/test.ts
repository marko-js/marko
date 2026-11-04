import type { TestConfig } from "../../main.test";

// A child's dynamic tag swaps to content whose client render shows an `<if>`
// the same patch hides, then a later patch shows it again.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "a0", show: true, flag: false },
    { a: "a1", show: false, flag: true },
    { a: "a2", show: true, flag: true },
  ],
};
