import type { TestConfig } from "../../main.test";
import { throws } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  skip_optimize: true,
  steps: [{}, throws(click("button"))],
};
