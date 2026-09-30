import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    wait,
    click(".inc"),
    click(".toggle"),
    click(".toggle"),
    wait,
    click(".inc"),
  ],
  equivalent: false,
};
