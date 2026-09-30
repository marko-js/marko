import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [{ show: true }, click("button"), click("button")],
};
