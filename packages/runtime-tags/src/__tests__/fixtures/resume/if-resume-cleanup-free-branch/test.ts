import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";
export const config: TestConfig = {
  steps: [{}, click("#n"), click("#o"), click("#n")],
};
