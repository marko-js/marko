import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// A pending or sync value that arrives after its predecessor settles, but
// before that settle renders, supersedes it through the count it took.
export const config: TestConfig = {
  steps: [{}, click("#first"), wait, click("#third"), wait],
};
