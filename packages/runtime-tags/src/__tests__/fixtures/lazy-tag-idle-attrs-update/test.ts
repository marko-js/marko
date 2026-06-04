import type { TestConfig } from "../../main.test";
import { flushIdle, wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// Two attr updates arrive before idle fires; the final value is applied once
// load completes, and later parent updates continue flowing into the child.
export const config: TestConfig = {
  steps: [{}, click, click, flushIdle, wait, click],
  equivalent: false,
};
