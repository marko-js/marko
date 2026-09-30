import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, click("#a"), wait],
};
