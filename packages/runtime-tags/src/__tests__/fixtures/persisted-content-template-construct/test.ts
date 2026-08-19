import type { TestConfig } from "../../main.test";

// A template renderer fed as `content=` inside a constructed branch on a
// scriptless page: nothing registers it client-side (reject).
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [{ show: false }, { show: true }],
};
