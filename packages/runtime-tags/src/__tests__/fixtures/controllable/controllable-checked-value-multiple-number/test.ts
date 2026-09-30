import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click("input"),
    click("input", 1),
    click("input", 2),
    click("button"),
  ],
};
