import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// After a native form reset, a two-way-bound radio group must restore to its
// default member ("b"), not clobber the bound value to undefined.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("input"), click("button"), wait, wait],
};
