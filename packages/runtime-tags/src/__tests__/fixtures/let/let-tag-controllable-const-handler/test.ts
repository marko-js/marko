import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

// A controllable let serializes a handler read through a `<const>`, so that
// function registers.
export const config: TestConfig = {
  steps: [{}, click("button")],
};
