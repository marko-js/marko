import type { TestConfig } from "../../../main.test";
import { flush, wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [{}, click("button"), flush, wait, click("button"), wait],
  equivalent: false,
};
