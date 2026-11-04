import type { TestConfig } from "../../main.test";

// Nested `<try>` around a settled `<await>`: both boundaries pair, the
// body fills in one flush.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.resolve("hi") },
    { promise: Promise.resolve("bye") },
  ],
};
