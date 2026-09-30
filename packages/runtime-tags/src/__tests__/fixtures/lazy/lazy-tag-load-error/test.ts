import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// Covers the lazy chunk rejection path for client created branches: the
// failed import renders the surrounding try tag's catch content.
export const config: TestConfig = {
  steps: [{}, wait, click("#toggle"), wait],
  equivalent: false,
};
