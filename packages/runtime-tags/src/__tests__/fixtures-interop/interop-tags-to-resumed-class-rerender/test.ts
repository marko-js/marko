import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("#tags"), click("#tags"), click("#toggle")],
};
