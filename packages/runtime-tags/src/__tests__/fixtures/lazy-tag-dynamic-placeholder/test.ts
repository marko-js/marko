import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    flushRAF,
    wait,
    click(".inc"),
    wait,
    click(".toggle"),
    wait,
    click(".toggle"),
    wait,
  ],
  equivalent: false,
};
