import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [{ value: 1 }, flushRAF, wait, click("button")],
  equivalent: false,
};
