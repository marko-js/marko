import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("button"), wait, click("button"), wait],
};
