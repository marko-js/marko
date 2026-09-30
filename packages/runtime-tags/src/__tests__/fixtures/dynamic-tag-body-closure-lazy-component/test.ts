import type { TestConfig } from "../../main.test";
import { flushIdle, wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// The page is live before the lazy card's channel lands with the body's
// registration, so `depth` changes first; the body must show the newer value.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("#inc"), flushIdle, wait, click("#toggle")],
};
