import type { TestConfig } from "../../main.test";

// The document's await rejected into the `@catch`, which the reorder put in
// the body's place: a patch rejecting again keeps it, and one resolving reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: () => [
    { promise: Promise.reject(new Error("a")) },
    { promise: Promise.reject(new Error("b")) },
    { promise: Promise.resolve("hi") },
  ],
};
