import type { TestConfig } from "../../main.test";

// A client-owned loop inside a server-owned branch: the outer shell
// drops (its interior listing has no channel), so revealing navigates.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [{ show: false }, { show: true }],
};
