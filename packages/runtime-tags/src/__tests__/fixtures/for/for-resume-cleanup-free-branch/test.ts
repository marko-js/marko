import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";
export const config: TestConfig = {
  steps: [{}, click("#c"), click("#o"), click("#c")],
};
