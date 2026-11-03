import type { TestConfig } from "../../main.test";

// A child's dynamic tag swaps to content whose `<if>` the same patch shows.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "a0", show: false, flag: false },
    { a: "a1", show: true, flag: true },
    { a: "a2", show: true, flag: false },
  ],
};
