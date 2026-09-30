import type { TestConfig } from "../../main.test";
import { flushVisible, wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    { value: 1 },
    flushVisible,
    wait,
    click(".parent"),
    wait,
    click(".child"),
    wait,
  ],
  equivalent: false,
};
