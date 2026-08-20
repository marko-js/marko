import type { TestConfig } from "../../main.test";

// A scriptless await body only a dom registration could render (a child tag
// variable) blocks its branch's shell (`inexpressibleAwaitBody`), so
// revealing the branch rejects to navigation.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { show: false, value: "x" },
    { show: true, value: "x" },
  ],
};
