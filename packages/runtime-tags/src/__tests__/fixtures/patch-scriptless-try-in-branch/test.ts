import type { TestConfig } from "../../main.test";

// A scriptless page's `<try>` inside a branch: the branch shell holds the
// try's markers, and the flush creates the try, naming its `@catch` by id.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false },
    { show: true, promise: Promise.resolve("hi") },
    { show: true, promise: Promise.reject(new Error("boom")) },
  ],
};
