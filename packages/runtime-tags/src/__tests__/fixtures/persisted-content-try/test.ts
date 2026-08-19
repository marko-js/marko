import type { TestConfig } from "../../main.test";

// A `<try>` has no construct entry yet, so a content body holding one
// rejects when the fed renderer constructs it (boundary records, cluster G).
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { show: false, value: "x" },
    { show: true, value: "x" },
  ],
};
