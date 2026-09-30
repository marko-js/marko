import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click("button.inc-child"),
    click("button.inc-parent"),
    click("button.reset"),
  ],
};
