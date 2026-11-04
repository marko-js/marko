import type { TestConfig } from "../../main.test";

// The document rendered the `@catch` (a sync throw): a patch throwing again
// keeps it, and one rendering the body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [
    { message: "x", boom: true },
    { message: "y", boom: true },
    { message: "ok" },
  ],
};
