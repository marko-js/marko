import type { TestConfig } from "../../main.test";
import { flushVisible, wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click("button"),
    click("button"),
    flushVisible,
    wait,
    click("button"),
  ],
  equivalent: false,
};
