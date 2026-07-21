import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function clickInc(container: Element) {
  container.querySelector<HTMLButtonElement>("#inc")!.click();
}

// A click re-fires both awaits into one transition; the first rejects
// early, but its catch defers — nothing changes on screen — until the
// second await resolves. The commit then applies the held output (count,
// b's content) and renders the catch for the rejected boundary.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, wait, flush, clickInc, wait, wait],
};
