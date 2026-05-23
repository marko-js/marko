import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The Child is in a dynamic-tag position (_lazy_renderer path). Two attr
// updates land before the lazy module resolves; both go through _lazy_signal
// PATH 1 (dedup via promise reference), so only the latest value is buffered.
// After load the branch is applied with the correct final value.
export const config: TestConfig = {
  steps: [{}, click, click, wait, click, wait],
  equivalent: false,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
