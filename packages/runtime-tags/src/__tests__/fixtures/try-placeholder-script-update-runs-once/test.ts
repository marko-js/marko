import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// Queued by two updates while the `<try>` awaits, a body effect runs once
// when the body returns.
export const config: TestConfig = {
  steps: [{}, click("button"), click("button"), wait],
};
