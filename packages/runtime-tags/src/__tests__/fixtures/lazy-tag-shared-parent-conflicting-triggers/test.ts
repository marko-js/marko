import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  // The steps never fire the `visible` trigger, so only the server renders the
  // lazy content.
  skip_settled: true,
  skip_parity: true,
  steps: [{}],
  equivalent: false,
};
