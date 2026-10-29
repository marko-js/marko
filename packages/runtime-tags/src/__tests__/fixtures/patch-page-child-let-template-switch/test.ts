import type { TestConfig } from "../../main.test";

// A live `<let>` the page doesn't hold, whose init switches template: the page
// holds the first one's id, so the patch rendering the other rejects and the
// page loads the document, as plain does.
export const config: TestConfig = {
  patches: true,
  expect_rejection: true,
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  steps: [
    { show: true, big: false, label: "a" },
    { show: true, big: false, label: "b" },
    { show: true, big: true, label: "c" },
  ],
};
