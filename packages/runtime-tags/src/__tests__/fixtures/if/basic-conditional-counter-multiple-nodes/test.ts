import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click("button.inc"),
    click("button.toggle"),
    click("button.inc"),
    click("button.toggle"),
    click("button.inc"),
  ],
};
