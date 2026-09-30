import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [{ show: false }, click("button")],
};
