import type { TestConfig } from "../../../main.test";
import { flushRAF, wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    wait,
    click(".parent"),
    flushRAF,
    click(".parent"),
    wait,
    flushRAF,
    click(".child"),
  ],
  equivalent: false,
};
