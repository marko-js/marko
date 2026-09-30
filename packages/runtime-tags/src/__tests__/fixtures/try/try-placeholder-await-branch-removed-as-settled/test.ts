import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// A pending `<await>` whose branch is destroyed in the flush its value settles
// in still releases its placeholder count.
export const config: TestConfig = {
  steps: [{}, click("button"), wait, wait],
};
