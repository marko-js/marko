import type { TestConfig } from "../../main.test";

// A page-root fed renderer has no faithful patch: the section's poison
// entry rejects the frame and the navigation fallback runs.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [{}, {}],
};
