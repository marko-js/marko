import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// Only `value.a` is sent, for the handler; the attribute tag content reads both.
export const config: TestConfig = {
  steps: [{}, wait, click("button")],
  equivalent: false,
};
