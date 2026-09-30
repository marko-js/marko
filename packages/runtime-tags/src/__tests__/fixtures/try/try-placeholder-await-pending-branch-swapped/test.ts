import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// Destroying the branch that holds a never-settling `<await>` releases the
// placeholder count it took, after the pending `<await>` swapped in takes one.
export const config: TestConfig = {
  steps: [{}, click("button"), wait, click("button"), wait],
};
