import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function clickInc(container: Element) {
  container.querySelector<HTMLButtonElement>("#inc")!.click();
}

function clickHide(container: Element) {
  container.querySelector<HTMLButtonElement>("#hide")!.click();
}

// Removing the subtree that contains the pending `<await>` leaves nothing to
// wait for: the transition commits immediately, so the held `count` text
// updates in the same flush that removes the region.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, clickInc, clickHide, wait],
};
