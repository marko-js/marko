import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click("input[value=b]"),
    click("button"),
    click("button"),
    click("input[value=a]"),
  ],
};
