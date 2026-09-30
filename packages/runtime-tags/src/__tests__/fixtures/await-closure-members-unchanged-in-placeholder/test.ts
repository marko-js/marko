import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// Only `value.a` is sent, for the handler; the awaited content reads both members.
export const config: TestConfig = {
  steps: [{}, flush, wait, click("button")],
  equivalent: false,
};
