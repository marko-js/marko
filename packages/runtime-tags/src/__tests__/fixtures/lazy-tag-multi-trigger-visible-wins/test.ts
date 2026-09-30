import type { TestConfig } from "../../main.test";
import { flushVisible, wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [{}, flushVisible, wait, click("#inc"), wait],
  equivalent: false,
};
