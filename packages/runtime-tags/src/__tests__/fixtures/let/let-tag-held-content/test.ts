import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// A let holds the content it starts with, so that content registers once a
// dynamic input serializes the let.
export const config: TestConfig = {
  steps: [{}, wait, click("button")],
};
