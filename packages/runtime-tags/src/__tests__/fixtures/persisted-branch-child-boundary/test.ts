import type { TestConfig } from "../../main.test";

// A child whose root holds a boundary needs its own records or renderer:
// the parent's shell cannot compose it, so no shell ships (fail closed).
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: () => [
    { show: false, promise: Promise.resolve("one") },
    { show: true, promise: Promise.resolve("one") },
  ],
};
