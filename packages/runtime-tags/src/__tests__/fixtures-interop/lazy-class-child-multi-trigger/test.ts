import type { TestConfig } from "../../main.test";
import { flushIdle, wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [{ value: 1 }, flushIdle, wait, click("#inc")],
  equivalent: false,
};
