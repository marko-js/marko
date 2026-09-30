import type { TestConfig } from "../../main.test";
import { flush, flushRAF, wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// A resumed stateful placeholder is live when a client-side re-await
// rejects: the catch replaces the placeholder (destroyed once), and the
// original body streaming in afterwards must not revive anything.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flushRAF, click("button"), wait, flush],
};
