import type { TestConfig } from "../../../main.test";
import { flush, wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// A catch that fires after the body went async ships the try's slots with
// its own content, since the stateful catch is resumed on the client.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click("button")],
};
