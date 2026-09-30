import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

// A let holds its initializer in its own slot, so a function reaching it
// through a `<const>` registers when the let serializes.
export const config: TestConfig = {
  steps: [{}, click("button")],
};
