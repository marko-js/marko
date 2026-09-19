import type { TestConfig } from "../../main.test";

// A scriptless page's `<try>` inside a branch: the branch shell expresses
// the try with its `@catch` elided (the flush carries the catch's html).
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false },
    { show: true, promise: Promise.resolve("hi") },
    { show: true, promise: Promise.reject(new Error("boom")) },
  ],
};
