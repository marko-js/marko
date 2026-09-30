import type { TestConfig } from "../../../main.test";
import { flushIdle, wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// Two attr updates arrive before idle fires; the final value is applied once
// load completes, and later parent updates continue flowing into the child.
export const config: TestConfig = {
  steps: [
    {},
    click("button"),
    click("button"),
    flushIdle,
    wait,
    click("button"),
  ],
  equivalent: false,
};
