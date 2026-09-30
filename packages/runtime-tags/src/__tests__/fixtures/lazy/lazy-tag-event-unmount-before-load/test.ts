import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click("#toggle"),
    click("#load"),
    wait,
    click("#toggle"),
    click("#load"),
    wait,
    click("#inc"),
  ],
  equivalent: false,
};
