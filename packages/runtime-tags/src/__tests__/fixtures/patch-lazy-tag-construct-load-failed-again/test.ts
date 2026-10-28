import type { TestConfig } from "../../main.test";

// The chunk a flush names fails to load every time and the page stays (as one
// left for the back/forward cache does): the next flush retries and rejects too.
export const config: TestConfig = {
  // Debug intentionally logs the load-failure diagnostic optimize cannot.
  skip_parity: true,
  patches: true,
  equivalent: false,
  expect_rejection: true,
  stay_on_rejection: true,
  reject_load: ["child.mjs"],
  steps: [
    { show: false, label: "a" },
    { show: true, label: "a" },
    { show: true, label: "b" },
  ],
};
