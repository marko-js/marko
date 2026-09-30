import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

// A pure-rest child's dom applier declares before its alias export: the
// client bundle evaluates and re-applies on state changes.
export const config: TestConfig = {
  steps: [{}, click("button"), click("button")],
};
