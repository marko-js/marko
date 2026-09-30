import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// Value order (["b","a"]) differs from document order (a,b); mutating options
// must not spuriously fire valueChange and reorder the model.
export const config: TestConfig = {
  steps: [{}, click("button"), wait],
};
