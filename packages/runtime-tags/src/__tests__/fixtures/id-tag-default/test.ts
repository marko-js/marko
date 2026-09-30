import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  // Server and client ids use different prefixes.
  skip_settled: true,
  equivalent: false,
  steps: [{}, click("button"), click("button")],
};
