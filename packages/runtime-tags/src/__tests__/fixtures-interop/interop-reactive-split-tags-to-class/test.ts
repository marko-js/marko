import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// A split Class API child whose input is reactively updated by its Tags API
// parent must be re-rendered in the browser by that parent.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("#tags"), click("#tags")],
};
