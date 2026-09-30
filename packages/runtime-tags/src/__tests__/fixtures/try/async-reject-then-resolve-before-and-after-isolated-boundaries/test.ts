import type { TestConfig } from "../../../main.test";
import { flush, wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, flush, wait, click("button")],
};
