import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The placeholder and the body render the same lazy tag, so the body's instance
// still waits on its input once the module is loaded; the body swaps in only
// after it inserts, and its effects see it.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
