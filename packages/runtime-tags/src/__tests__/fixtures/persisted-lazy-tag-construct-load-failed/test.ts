import type { TestConfig } from "../../main.test";

// The chunk a frame names fails to load: the frame rejects (the caller
// navigates) instead of parking, and the page keeps what it had.
export const config: TestConfig = {
  // Debug intentionally logs the load-failure diagnostic optimize cannot.
  skip_parity: true,
  persisted: true,
  equivalent: false,
  expect_rejection: true,
  reject_load: ["child.mjs"],
  steps: [
    { show: false, label: "a" },
    { show: true, label: "a" },
  ],
};
