import type { TestConfig } from "../../main.test";

// A flush whose try body renders without error and writes nothing still carries
// the body, so a page showing the `@catch` an earlier flush created reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [{ boom: false }, { boom: true }, { boom: false }],
};
