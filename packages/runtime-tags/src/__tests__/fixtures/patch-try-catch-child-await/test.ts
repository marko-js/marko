import type { TestConfig } from "../../main.test";

// A child template's await under the page's `<try>`: once a rejection shows
// the `@catch`, a patch whose await resolves reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: () => [
    { promise: Promise.resolve("one") },
    { promise: Promise.reject(new Error("boom")) },
    { promise: Promise.resolve("three") },
  ],
};
