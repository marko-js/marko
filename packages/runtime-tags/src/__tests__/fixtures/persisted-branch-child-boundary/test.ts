import type { TestConfig } from "../../main.test";

// A child whose root holds a boundary composes into the parent's shell; the
// await constructs detached from its record and attaches on settle.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { show: false, promise: Promise.resolve("one") },
    { show: true, promise: Promise.resolve("one") },
  ],
};
