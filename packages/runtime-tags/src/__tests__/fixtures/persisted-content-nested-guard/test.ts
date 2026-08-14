import type { TestConfig } from "../../main.test";

// A fed renderer below the root has no fill-joined signal yet: its entry
// pairs an unchanged renderer key and rejects a change (navigation).
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { show: true, content: "div" },
    { show: true, content: "div" },
    { show: true, content: "span" },
  ],
};
