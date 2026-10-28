import type { TestConfig } from "../../main.test";

// A `<try>` inside a caught `<try>`: the outer catch destroys the inner try
// too, and the next flush rendering the outer body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: () => [
    { check: () => "ok", promise: Promise.resolve("v1") },
    {
      check: () => {
        throw new Error("boom");
      },
      promise: Promise.resolve("v2"),
    },
    { check: () => "ok", promise: Promise.resolve("v3") },
  ],
};
