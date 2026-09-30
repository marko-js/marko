import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// An attribute re-set before the module lands replaces its buffered entry
// (last value wins in the batch); one set after it goes straight through.
export const config: TestConfig = {
  steps: [
    {},
    click(".mount"),
    click(".inc"),
    wait,
    wait,
    click(".inc"),
    click(".focus"),
  ],
  equivalent: false,
};
