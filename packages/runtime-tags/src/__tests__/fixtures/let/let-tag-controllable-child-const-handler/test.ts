import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

// A child's controllable let serializes the handler a parent passes it, so
// the parent registers that function.
export const config: TestConfig = {
  steps: [{}, click("button")],
};
