import type { TestConfig } from "../../main.test";

// An await inside an await inside a `<try>`: once the outer await rejects
// into the `@catch`, a patch settling both reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: () => [
    { a: Promise.resolve("a1"), b: Promise.resolve("b1") },
    { a: Promise.reject(new Error("boom")), b: Promise.resolve("b2") },
    { a: Promise.resolve("a3"), b: Promise.resolve("b3") },
  ],
};
