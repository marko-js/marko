import type { TestConfig } from "../../main.test";
import { throws } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [{}, throws(click("#toggle"))],
};
