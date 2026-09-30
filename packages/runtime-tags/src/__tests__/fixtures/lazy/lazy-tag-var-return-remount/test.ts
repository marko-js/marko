import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// Mounted and unmounted before the module lands, then mounted again once
// it is cached: the cached insert is queued behind the owner's setup, so
// the attribute is in the batch and the nested <return> still arrives.
export const config: TestConfig = {
  steps: [
    {},
    click(".toggle"),
    click(".toggle"),
    wait,
    click(".toggle"),
    wait,
    click(".focus"),
    click(".toggle"),
    click(".toggle"),
    click(".focus"),
  ],
  equivalent: false,
};
