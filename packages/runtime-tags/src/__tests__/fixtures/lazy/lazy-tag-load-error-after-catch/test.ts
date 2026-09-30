import type { TestConfig } from "../../../main.test";
import { flushRAF, wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// A lazy tag that fails to load after its `<try>` caught an error and zeroed
// the placeholder count takes nothing more from that count.
export const config: TestConfig = {
  steps: [{}, click("#toggle"), flushRAF, wait, click("#load"), wait],
};
