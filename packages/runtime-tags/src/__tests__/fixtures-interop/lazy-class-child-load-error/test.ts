import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// Covers the lazy chunk rejection path: the failed import emits an
// "error" event on the parent component of the load tag.
export const config: TestConfig = {
  steps: [{}, click("#toggle"), wait],
  equivalent: false,
};
