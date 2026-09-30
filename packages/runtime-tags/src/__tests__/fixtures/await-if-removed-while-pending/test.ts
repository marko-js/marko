import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// Removing the branch that holds a pending `<await>` without a placeholder
// must leave nothing behind once its value settles.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("button"), wait],
};
