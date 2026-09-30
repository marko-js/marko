import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// A lazily loaded tag that takes an attribute and has a tag variable,
// mounted after resume: its setup lands in a later run than its input
// chunks, and the nested tag's <let> and <return> must still apply.
export const config: TestConfig = {
  steps: [{}, click(".mount"), wait, wait, click(".focus")],
  equivalent: false,
};
