import type { TestConfig } from "../../../main.test";
import { click, type } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [{}, type("input", "one"), click("button"), type("input", "two")],
};
