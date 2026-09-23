import type { TestConfig } from "../../main.test";

// A child template's await under the page's caught `<try>`: the caught
// body renders in a context the child's boundary reads at runtime, so its
// entries carry their payload and the rebuild after the catch creates it.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.resolve("one") },
    { promise: Promise.reject(new Error("boom")) },
    { promise: Promise.resolve("three") },
  ],
};
