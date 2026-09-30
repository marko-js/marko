import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click("button.once"),
    click("button.once"),
    click("button.twice"),
    click("button.twice"),
    click("button.twice"),
  ],
};
