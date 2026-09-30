import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [{}, click("button", 1), click("button", 1), click("button")],
};
