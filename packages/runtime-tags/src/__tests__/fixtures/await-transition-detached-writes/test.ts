import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// Crosses the detach boundary mid-transition: the first update is captured
// while the stale region is still visible, the explicit rAF detaches the
// region (draining the capture onto the now-hidden DOM), and the second
// update writes straight through to it. The release must surface the final
// values with no visible churn — the freeze-window capture must never
// clobber the later direct write.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, click, flushRAF, click, wait],
};
