import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [{}, click("#toggle"), wait, click("#toggle"), click("#toggle")],
  equivalent: false,
};
