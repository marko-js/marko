import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// `value.a` changes before the awaited content arrives, which still shows it.
export const config: TestConfig = {
  steps: [{}, click("button"), flush, wait, click("button")],
  equivalent: false,
};
