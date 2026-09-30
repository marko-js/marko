import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// The dynamic-tag lazy path (_load_template) with a tag variable whose
// value is a nested tag's <return>.
export const config: TestConfig = {
  steps: [{}, click(".mount"), wait, wait, click(".focus")],
  equivalent: false,
};
