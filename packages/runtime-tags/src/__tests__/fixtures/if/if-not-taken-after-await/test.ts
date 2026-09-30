import type { TestConfig } from "../../../main.test";
import { flush, wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click("button"), wait, click("button"), wait],
};
