import type { TestConfig } from "../../main.test";

// A `<try>` has no construct entry yet, so a scriptless branch holding one
// rejects when it constructs (boundary records, cluster G).
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { show: false, value: "x" },
    { show: true, value: "x" },
  ],
};
