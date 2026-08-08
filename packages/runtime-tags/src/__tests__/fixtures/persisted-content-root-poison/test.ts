import type { TestConfig } from "../../main.test";

// A page-root fed renderer that actually renders has no faithful patch:
// the guarded poison entry rejects the frame (navigation). An unfed
// slot (see persisted-child-slot-optional) patches normally.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [{ content: "div" }, { content: "div" }],
};
