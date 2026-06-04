import type { TestConfig } from "../../main.test";
import { flushVisible, wait } from "../../utils/resolve";

function click(container: Element) {
  (container.querySelector("#inc") as HTMLElement).click();
}

// Visible fires first in the race: a.abort() cascades to cancel the pending
// idle callback. No double-load, no crash. The click fires before the module
// loads (creating the IO/idle trigger). A trailing wait lets the idle path
// resolve in SSR context, verifying reactive updates reach the child.
export const config: TestConfig = {
  steps: [{}, flushVisible, wait, click, wait],
  equivalent: false,
};
