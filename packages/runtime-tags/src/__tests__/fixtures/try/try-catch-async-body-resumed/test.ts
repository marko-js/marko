import type { TestConfig } from "../../../main.test";
import { flush, wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// The body wrote nothing before it went async, so the catch slot is only
// sent once the streamed body turns out to be stateful; a throw from the
// resumed body must still reach `@catch`.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click("button")],
};
