import type { TestConfig } from "../../main.test";
import { flushVisible, wait } from "../../utils/resolve";

function showClick(container: Element) {
  (container.querySelector("#show") as HTMLElement).click();
}

function incClick(container: Element) {
  (container.querySelector("#inc") as HTMLElement).click();
}

// Initially no #target element — MO watches for DOM changes.
// After showClick, #target appears. incClick fires before the module loads,
// which sets up the IO (observe(#target) finds it in the DOM) and buffers
// the update. flushVisible fires with #target in IO, triggering the load.
// wait allows the module to resolve the buffered update. The final incClick
// verifies reactive updates continue working after load.
export const config: TestConfig = {
  steps: [{}, showClick, incClick, flushVisible, wait, incClick],
  equivalent: false,
};
